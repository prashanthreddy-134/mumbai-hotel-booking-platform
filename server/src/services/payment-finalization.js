
const crypto = require("node:crypto");
const prisma = require("../config/database");
const razorpay = require("./razorpay");

const REFUND_LOCK_MS = 60 * 1000;

function expectedAmountPaise(amount) {
  return Math.round(Number(amount) * 100);
}

function refundReceipt(paymentRecordId) {
  // "mr-" + UUID is within Razorpay's 40-character receipt limit.
  return `mr-${paymentRecordId}`;
}

async function lockBookingAndPayment(tx, bookingId, paymentRecordId) {
  // Always lock in the same order to reduce deadlock risk.
  await tx.$queryRawUnsafe(
    'SELECT "id" FROM "Booking" WHERE "id" = $1 FOR UPDATE',
    bookingId
  );

  await tx.$queryRawUnsafe(
    'SELECT "id" FROM "Payment" WHERE "id" = $1 FOR UPDATE',
    paymentRecordId
  );

  return tx.payment.findUnique({
    where: { id: paymentRecordId },
    include: { booking: true }
  });
}

/**
 * Only call this after obtaining payment details directly from Razorpay.
 * The browser callback alone is never sufficient to confirm a booking.
 */
async function finalizeCapturedPayment({
  paymentRecordId,
  providerPayment,
  signature
}) {
  if (
    !providerPayment ||
    typeof providerPayment.id !== "string" ||
    typeof providerPayment.order_id !== "string" ||
    providerPayment.status !== "captured"
  ) {
    throw new Error("A captured Razorpay payment is required");
  }

  const initialPayment = await prisma.payment.findUnique({
    where: { id: paymentRecordId },
    select: { id: true, bookingId: true }
  });

  if (!initialPayment) {
    return { outcome: "payment_record_not_found" };
  }

  return prisma.$transaction(
    async (tx) => {
      const payment = await lockBookingAndPayment(
        tx,
        initialPayment.bookingId,
        paymentRecordId
      );

      if (!payment) {
        return { outcome: "payment_record_not_found" };
      }

      if (payment.razorpayOrderId !== providerPayment.order_id) {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REVIEW_REQUIRED",
            failureReason: "Captured payment order ID did not match"
          }
        });

        return { outcome: "review_required" };
      }

      if (
        providerPayment.currency !== payment.currency ||
        providerPayment.amount !== expectedAmountPaise(payment.amount)
      ) {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REVIEW_REQUIRED",
            failureReason: "Captured payment amount or currency did not match"
          }
        });

        return { outcome: "review_required" };
      }

      // Never allow a late event to overwrite a terminal refund state.
      if (payment.status === "REFUNDED") {
        return {
          outcome: "already_refunded",
          paymentRecordId: payment.id,
          bookingId: payment.bookingId
        };
      }

      if (payment.status === "REVIEW_REQUIRED") {
        return { outcome: "review_required" };
      }

      if (payment.status === "REFUND_FAILED") {
        return { outcome: "manual_review_required" };
      }

      if (payment.status === "REFUND_PENDING") {
        if (payment.razorpayPaymentId === providerPayment.id) {
          return {
            outcome: "refund_required",
            paymentRecordId: payment.id
          };
        }

        return { outcome: "review_required" };
      }

      const alreadyUsed = await tx.payment.findFirst({
        where: {
          razorpayPaymentId: providerPayment.id,
          id: { not: payment.id }
        },
        select: { id: true }
      });

      if (alreadyUsed) {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REVIEW_REQUIRED",
            failureReason:
              "Razorpay payment ID is already linked to another payment"
          }
        });

        return { outcome: "review_required" };
      }

      if (
        payment.status === "CAPTURED" &&
        payment.razorpayPaymentId === providerPayment.id &&
        payment.booking.status === "CONFIRMED"
      ) {
        return {
          outcome: "already_confirmed",
          bookingId: payment.bookingId
        };
      }

      // If another payment already secured this booking, this captured
      // payment must be refunded rather than creating a second booking.
      if (payment.booking.status === "CONFIRMED") {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REFUND_PENDING",
            razorpayPaymentId: providerPayment.id,
            razorpaySignature: signature || null,
            failureReason:
              "Booking was already confirmed by another payment"
          }
        });

        return {
          outcome: "refund_required",
          paymentRecordId: payment.id
        };
      }

      const now = new Date();

      const holdIsValid =
        payment.booking.status === "PENDING" &&
        payment.booking.holdExpiresAt &&
        payment.booking.holdExpiresAt > now;

      if (!holdIsValid) {
        if (payment.booking.status === "PENDING") {
          await tx.booking.updateMany({
            where: {
              id: payment.bookingId,
              status: "PENDING"
            },
            data: { status: "CANCELLED" }
          });
        }

        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REFUND_PENDING",
            razorpayPaymentId: providerPayment.id,
            razorpaySignature: signature || null,
            failureReason:
              "Payment was captured after the booking hold expired or became invalid"
          }
        });

        return {
          outcome: "refund_required",
          paymentRecordId: payment.id
        };
      }

      const bookingUpdate = await tx.booking.updateMany({
        where: {
          id: payment.bookingId,
          status: "PENDING",
          holdExpiresAt: { gt: now }
        },
        data: { status: "CONFIRMED" }
      });

      if (bookingUpdate.count !== 1) {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            status: "REFUND_PENDING",
            razorpayPaymentId: providerPayment.id,
            razorpaySignature: signature || null,
            failureReason:
              "Booking could not be confirmed after payment capture"
          }
        });

        return {
          outcome: "refund_required",
          paymentRecordId: payment.id
        };
      }

      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: "CAPTURED",
          razorpayPaymentId: providerPayment.id,
          razorpaySignature: signature || null,
          failureReason: null
        }
      });

      return {
        outcome: "booking_confirmed",
        bookingId: payment.bookingId
      };
    },
    {
      isolationLevel: "Serializable",
      maxWait: 5000,
      timeout: 10000
    }
  );
}

async function releaseRefundLock(paymentId, token) {
  await prisma.payment.updateMany({
    where: {
      id: paymentId,
      refundLockToken: token
    },
    data: {
      refundLockToken: null,
      refundLockExpiresAt: null
    }
  });
}

async function saveRefundResult(payment, token, refund) {
  const expectedPaise = expectedAmountPaise(payment.amount);

  if (
    !refund ||
    typeof refund.id !== "string" ||
    !refund.id ||
    refund.payment_id &&
      refund.payment_id !== payment.razorpayPaymentId ||
    refund.amount !== expectedPaise
  ) {
    await prisma.payment.updateMany({
      where: {
        id: payment.id,
        refundLockToken: token
      },
      data: {
        status: "REVIEW_REQUIRED",
        failureReason:
          "Razorpay refund details did not match the expected payment and amount",
        refundLockToken: null,
        refundLockExpiresAt: null
      }
    });

    return { outcome: "manual_review_required" };
  }

  let localStatus = "REFUND_PENDING";

  if (refund.status === "processed") {
    localStatus = "REFUNDED";
  } else if (refund.status === "failed") {
    localStatus = "REFUND_FAILED";
  }

  const updated = await prisma.payment.updateMany({
    where: {
      id: payment.id,
      refundLockToken: token
    },
    data: {
      status: localStatus,
      refundId: refund.id,
      refundStatus: refund.status || null,
      refundedAmount:
        localStatus === "REFUNDED"
          ? refund.amount / 100
          : null,
      failureReason:
        localStatus === "REFUND_FAILED"
          ? "Razorpay reported that the refund failed. Manual review is required."
          : null,
      refundLockToken: null,
      refundLockExpiresAt: null
    }
  });

  if (updated.count !== 1) {
    return { outcome: "refund_processing_lock_lost" };
  }

  return {
    outcome:
      localStatus === "REFUNDED"
        ? "refunded"
        : localStatus === "REFUND_FAILED"
          ? "refund_failed"
          : "refund_pending",
    refundId: refund.id,
    refundStatus: refund.status
  };
}

/**
 * Refund processing is serialized by a database lease.
 *
 * Important safety rule:
 * refundCreateAttemptedAt is written BEFORE calling Razorpay.
 * If the request times out or the process crashes, a later attempt checks
 * Razorpay for the stable receipt but does not blindly create another refund.
 *
 * An unresolved attempt requires reconciliation/manual review before retry.
 */
async function ensureRefund(paymentRecordId) {
  const initialPayment = await prisma.payment.findUnique({
    where: { id: paymentRecordId }
  });

  if (!initialPayment || !initialPayment.razorpayPaymentId) {
    throw new Error(
      "Payment record or captured Razorpay payment ID is missing"
    );
  }

  if (initialPayment.status === "REFUNDED") {
    return {
      outcome: "already_refunded",
      refundId: initialPayment.refundId
    };
  }

  if (initialPayment.status === "REFUND_FAILED") {
    return {
      outcome: "refund_failed",
      refundId: initialPayment.refundId,
      requiresManualReview: true
    };
  }

  if (initialPayment.status === "REVIEW_REQUIRED") {
    return { outcome: "manual_review_required" };
  }

  if (initialPayment.status !== "REFUND_PENDING") {
    return {
      outcome: "refund_not_ready",
      status: initialPayment.status
    };
  }

  const token = crypto.randomUUID();
  const now = new Date();
  const lockExpiresAt = new Date(now.getTime() + REFUND_LOCK_MS);

  // Atomic lease claim: only one active worker can own this payment.
  const claim = await prisma.payment.updateMany({
    where: {
      id: paymentRecordId,
      status: "REFUND_PENDING",
      OR: [
        { refundLockExpiresAt: null },
        { refundLockExpiresAt: { lte: now } }
      ]
    },
    data: {
      refundLockToken: token,
      refundLockExpiresAt: lockExpiresAt,
      refundAttempts: { increment: 1 }
    }
  });

  if (claim.count !== 1) {
    const current = await prisma.payment.findUnique({
      where: { id: paymentRecordId },
      select: {
        status: true,
        refundId: true,
        refundLockExpiresAt: true
      }
    });

    if (current?.status === "REFUNDED") {
      return {
        outcome: "already_refunded",
        refundId: current.refundId
      };
    }

    if (current?.status === "REFUND_FAILED") {
      return {
        outcome: "refund_failed",
        refundId: current.refundId,
        requiresManualReview: true
      };
    }

    return {
      outcome: "refund_processing",
      retryAfter: current?.refundLockExpiresAt || null
    };
  }

  let lockReleased = false;

  try {
    const payment = await prisma.payment.findFirst({
      where: {
        id: paymentRecordId,
        refundLockToken: token
      }
    });

    if (!payment) {
      return { outcome: "refund_processing_lock_lost" };
    }

    const receipt = refundReceipt(payment.id);

    // Always look up an existing refund before considering creation.
    let refundList;

    try {
      refundList = await razorpay.fetchRefunds(
        payment.razorpayPaymentId
      );
    } catch (error) {
      await prisma.payment.updateMany({
        where: {
          id: payment.id,
          refundLockToken: token
        },
        data: {
          failureReason:
            `Could not check existing Razorpay refunds: ${error.message}`
        }
      });

      return { outcome: "refund_pending" };
    }

    const items = Array.isArray(refundList?.items)
      ? refundList.items
      : null;

    if (!items) {
      await prisma.payment.updateMany({
        where: {
          id: payment.id,
          refundLockToken: token
        },
        data: {
          failureReason:
            "Razorpay returned an unexpected refund-list response"
        }
      });

      return { outcome: "refund_pending" };
    }

    const matchingRefunds = items.filter(
      (item) => item.receipt === receipt
    );

    if (matchingRefunds.length > 1) {
      await prisma.payment.updateMany({
        where: {
          id: payment.id,
          refundLockToken: token
        },
        data: {
          status: "REVIEW_REQUIRED",
          failureReason:
            "Multiple Razorpay refunds have the same local refund receipt",
          refundLockToken: null,
          refundLockExpiresAt: null
        }
      });

      lockReleased = true;
      return { outcome: "manual_review_required" };
    }

    if (matchingRefunds.length === 1) {
      const result = await saveRefundResult(
        payment,
        token,
        matchingRefunds[0]
      );

      lockReleased = true;
      return result;
    }

    // A previous create call may have succeeded even if its response was
    // lost. Never create again automatically after such an attempt.
    if (payment.refundCreateAttemptedAt) {
      await prisma.payment.updateMany({
        where: {
          id: payment.id,
          refundLockToken: token
        },
        data: {
          failureReason:
            "A refund creation was previously attempted but Razorpay has not confirmed it. Manual reconciliation is required."
        }
      });

      return { outcome: "refund_pending" };
    }

    // Persist the attempt marker before the remote request. If the process
    // crashes after this write, future workers will not blindly retry.
    const attemptMarker = await prisma.payment.updateMany({
      where: {
        id: payment.id,
        refundLockToken: token,
        refundCreateAttemptedAt: null,
        status: "REFUND_PENDING"
      },
      data: {
        refundCreateAttemptedAt: new Date()
      }
    });

    if (attemptMarker.count !== 1) {
      return { outcome: "refund_pending" };
    }

    let createdRefund;

   
    try {
      createdRefund = await razorpay.createRefund(
        payment.razorpayPaymentId,
        undefined,
        receipt
      );
    } catch (createError) {
      // The request may have succeeded remotely even though the response
      // timed out. Look up the same stable receipt before deciding.
      let reconciledRefunds;

      try {
        reconciledRefunds = await razorpay.fetchRefunds(
          payment.razorpayPaymentId
        );
      } catch (lookupError) {
        await prisma.payment.updateMany({
          where: {
            id: payment.id,
            refundLockToken: token
          },
          data: {
            failureReason:
              `Refund creation result is uncertain. Create error: ${createError.message}. ` +
              `Reconciliation error: ${lookupError.message}`
          }
        });

        return { outcome: "refund_pending" };
      }

      const reconciledItems = Array.isArray(reconciledRefunds?.items)
        ? reconciledRefunds.items
        : null;

      if (!reconciledItems) {
        await prisma.payment.updateMany({
          where: {
            id: payment.id,
            refundLockToken: token
          },
          data: {
            failureReason:
              "Razorpay returned an unexpected refund reconciliation response"
          }
        });

        return { outcome: "refund_pending" };
      }

      const matches = reconciledItems.filter(
        (item) => item.receipt === receipt
      );

      if (matches.length > 1) {
        await prisma.payment.updateMany({
          where: {
            id: payment.id,
            refundLockToken: token
          },
          data: {
            status: "REVIEW_REQUIRED",
            failureReason:
              "Multiple refunds found for the same local refund receipt",
            refundLockToken: null,
            refundLockExpiresAt: null
          }
        });

        lockReleased = true;
        return { outcome: "manual_review_required" };
      }

      if (matches.length === 0) {
        await prisma.payment.updateMany({
          where: {
            id: payment.id,
            refundLockToken: token
          },
          data: {
            failureReason:
              `Refund creation could not be confirmed: ${createError.message}`
          }
        });

        return { outcome: "refund_pending" };
      }

      const result = await saveRefundResult(
        payment,
        token,
        matches[0]
      );

      lockReleased = true;
      return result;
    }

    const result = await saveRefundResult(
      payment,
      token,
      createdRefund
    );

    lockReleased = true;
    return result;
  } finally {
    if (!lockReleased) {
      await releaseRefundLock(paymentRecordId, token).catch(() => {});
    }
  }
}

module.exports = {
  finalizeCapturedPayment,
  ensureRefund
};
