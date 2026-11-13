
const express = require("express");
const { randomUUID } = require("node:crypto");

const prisma = require("../config/database");
const razorpay = require("../services/razorpay");

const {
  finalizeCapturedPayment,
  ensureRefund
} = require("../services/payment-finalization");

const router = express.Router();

const WEBHOOK_LEASE_MS = 60 * 1000;

function getPaymentEntity(payload) {
  return payload?.payload?.payment?.entity || null;
}

function isDuplicateKey(error) {
  return error?.code === "P2002";
}

async function createOrFindEvent(eventId, eventType) {
  try {
    return await prisma.paymentWebhookEvent.create({
      data: {
        provider: "RAZORPAY",
        eventId,
        eventType
      }
    });
  } catch (error) {
    if (!isDuplicateKey(error)) {
      throw error;
    }

    const existing = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    if (!existing) {
      throw error;
    }

    return existing;
  }
}

async function claimEvent(eventId, token) {
  const now = new Date();
  const lockExpiresAt = new Date(
    now.getTime() + WEBHOOK_LEASE_MS
  );

  const result = await prisma.paymentWebhookEvent.updateMany({
    where: {
      eventId,
      processedAt: null,
      OR: [
        { processingLockExpiresAt: null },
        { processingLockExpiresAt: { lte: now } }
      ]
    },
    data: {
      processingToken: token,
      processingLockExpiresAt: lockExpiresAt,
      attempts: {
        increment: 1
      },
      lastError: null
    }
  });

  return result.count === 1;
}

async function markEventProcessed(eventId, token) {
  const result = await prisma.paymentWebhookEvent.updateMany({
    where: {
      eventId,
      processingToken: token,
      processedAt: null
    },
    data: {
      processedAt: new Date(),
      processingToken: null,
      processingLockExpiresAt: null,
      lastError: null
    }
  });

  if (result.count !== 1) {
    throw new Error(
      "Webhook processing lease was lost before marking the event processed"
    );
  }
}

async function releaseEvent(eventId, token, error) {
  await prisma.paymentWebhookEvent.updateMany({
    where: {
      eventId,
      processingToken: token,
      processedAt: null
    },
    data: {
      processingToken: null,
      processingLockExpiresAt: null,
      lastError: String(
        error?.message || error || "Unknown webhook error"
      ).slice(0, 2000)
    }
  });
}

router.post("/webhook", async (req, res) => {
  const rawBody = req.body;
  const signature = req.get("x-razorpay-signature");
  const eventId = req.get("x-razorpay-event-id");

  // Razorpay signatures must be checked against the exact raw bytes.
  if (!Buffer.isBuffer(rawBody)) {
    return res.status(400).json({
      error: "Raw webhook body is required"
    });
  }

  if (!razorpay.verifyWebhookSignature(rawBody, signature)) {
    return res.status(401).json({
      error: "Invalid webhook signature"
    });
  }

  if (
    typeof eventId !== "string" ||
    eventId.trim().length === 0 ||
    eventId.length > 255
  ) {
    return res.status(400).json({
      error: "Valid Razorpay event ID is required"
    });
  }

  let event;

  try {
    event = JSON.parse(rawBody.toString("utf8"));
  } catch {
    return res.status(400).json({
      error: "Invalid webhook JSON"
    });
  }

  const eventType = event?.event;

  const supportedEvents = [
    "payment.captured",
    "order.paid",
    "payment.failed"
  ];

  if (!supportedEvents.includes(eventType)) {
    return res.status(200).json({
      received: true,
      ignored: true,
      reason: "Unsupported event"
    });
  }

  const eventPayment = getPaymentEntity(event);

  if (
    !eventPayment ||
    typeof eventPayment.id !== "string" ||
    typeof eventPayment.order_id !== "string"
  ) {
    return res.status(400).json({
      error: "Payment entity is missing required identifiers"
    });
  }

  // Persist the event before attempting processing.
  await createOrFindEvent(eventId, eventType);

  // Only one request can own an unexpired processing lease.
  const token = randomUUID();
  const claimed = await claimEvent(eventId, token);

  if (!claimed) {
    const currentEvent = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    if (currentEvent?.processedAt) {
      return res.status(200).json({
        received: true,
        duplicate: true,
        processed: true
      });
    }

    return res.status(503).json({
      received: true,
      outcome: "webhook_processing_in_progress",
      retry: true
    });
  }

  try {
    const paymentRecord = await prisma.payment.findUnique({
      where: {
        razorpayOrderId: eventPayment.order_id
      }
    });

    if (!paymentRecord) {
      await releaseEvent(
        eventId,
        token,
        "Local payment record was not found"
      );

      return res.status(503).json({
        received: true,
        outcome: "payment_record_not_found",
        retry: true
      });
    }

    // Record failed payments without downgrading protected statuses.
    if (eventType === "payment.failed") {
      await prisma.payment.updateMany({
        where: {
          id: paymentRecord.id,
          status: {
            notIn: [
              "CAPTURED",
              "REFUNDED",
              "REFUND_PENDING",
              "REFUND_FAILED",
              "REVIEW_REQUIRED"
            ]
          }
        },
        data: {
          status: "FAILED",
          razorpayPaymentId: eventPayment.id,
          failureReason:
            eventPayment.error_description ||
            eventPayment.error_reason ||
            "Razorpay reported payment failure"
        }
      });

      await markEventProcessed(eventId, token);

      return res.status(200).json({
        received: true,
        outcome: "payment_failure_recorded"
      });
    }

    // Never trust the webhook payload alone to confirm a booking.
    const providerPayment = await razorpay.fetchPayment(
      eventPayment.id
    );

    if (
      providerPayment.id !== eventPayment.id ||
      providerPayment.order_id !== eventPayment.order_id
    ) {
      throw new Error(
        "Razorpay payment identifiers do not match"
      );
    }

    if (providerPayment.status !== "captured") {
      await releaseEvent(
        eventId,
        token,
        "Razorpay payment is not captured yet"
      );

      return res.status(503).json({
        received: true,
        outcome: "payment_not_captured_yet",
        retry: true
      });
    }

    const result = await finalizeCapturedPayment({
      paymentRecordId: paymentRecord.id,
      providerPayment
    });

    if (result.outcome === "refund_required") {
      const refundResult = await ensureRefund(
        result.paymentRecordId
      );

      const retryableRefundOutcomes = [
        "refund_pending",
        "refund_processing",
        "refund_processing_lock_lost"
      ];

      if (
        retryableRefundOutcomes.includes(refundResult.outcome)
      ) {
        await releaseEvent(
          eventId,
          token,
          `Refund requires retry: ${refundResult.outcome}`
        );

        return res.status(503).json({
          received: true,
          outcome: refundResult.outcome,
          retry: true
        });
      }

      await markEventProcessed(eventId, token);

      return res.status(200).json({
        received: true,
        outcome: refundResult.outcome
      });
    }

    if (result.outcome === "review_required") {
      await markEventProcessed(eventId, token);

      return res.status(200).json({
        received: true,
        outcome: "manual_review_required"
      });
    }

    const successfulOutcomes = [
      "booking_confirmed",
      "already_confirmed",
      "already_refunded"
    ];

    if (!successfulOutcomes.includes(result.outcome)) {
      await releaseEvent(
        eventId,
        token,
        `Payment finalization requires retry: ${result.outcome}`
      );

      return res.status(503).json({
        received: true,
        outcome: result.outcome,
        retry: true
      });
    }

    await markEventProcessed(eventId, token);

    return res.status(200).json({
      received: true,
      outcome: result.outcome
    });
  } catch (error) {
    // Release only our own lease.
    try {
      await releaseEvent(eventId, token, error);
    } catch (releaseError) {
      console.error(
        "Failed to release webhook lease:",
        releaseError
      );
    }

    throw error;
  }
});

module.exports = router;
