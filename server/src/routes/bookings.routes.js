
const express = require("express");
const { z } = require("zod");
const prisma = require("../config/database");
const authenticate = require("../middleware/auth");
const { ensureRefund } = require("../services/payment-finalization");

const router = express.Router();

router.use(authenticate);

const bookingSchema = z.object({
  roomId: z.string().uuid(),
  checkIn: z.string().datetime({ offset: true }),
  checkOut: z.string().datetime({ offset: true })
});

const ACTIVE_STATUSES = ["PENDING", "CONFIRMED"];
const MAX_TRANSACTION_ATTEMPTS = 3;

function isSerializationConflict(error) {
  return error && error.code === "P2034";
}

function calculateNights(checkIn, checkOut) {
  return Math.ceil(
    (checkOut.getTime() - checkIn.getTime()) / 86400000
  );
}

async function createBookingWithRetry(data) {
  for (
    let attempt = 1;
    attempt <= MAX_TRANSACTION_ATTEMPTS;
    attempt += 1
  ) {
    try {
      return await prisma.$transaction(
        async (tx) => {
          const room = await tx.room.findUnique({
            where: { id: data.roomId },
            select: {
              id: true,
              name: true,
              capacity: true,
              price: true,
              hotelId: true
            }
          });

          if (!room) {
            const error = new Error("Room not found");
            error.status = 404;
            throw error;
          }

          const overlap = await tx.booking.findFirst({
            where: {
              roomId: room.id,
              status: { in: ACTIVE_STATUSES },
              checkIn: { lt: data.checkOut },
              checkOut: { gt: data.checkIn }
            },
            select: { id: true }
          });

          if (overlap) {
            const error = new Error(
              "Room is not available for these dates"
            );
            error.status = 409;
            throw error;
          }

          const nights = calculateNights(
            data.checkIn,
            data.checkOut
          );

          const total = Number(
            (room.price * nights).toFixed(2)
          );

          return tx.booking.create({
            data: {
              userId: data.userId,
              roomId: room.id,
              checkIn: data.checkIn,
              checkOut: data.checkOut,
              total,
              status: "PENDING"
            },
            include: {
              room: {
                include: {
                  hotel: true
                }
              }
            }
          });
        },
        {
          isolationLevel: "Serializable",
          maxWait: 5000,
          timeout: 10000
        }
      );
    } catch (error) {
      if (
        isSerializationConflict(error) &&
        attempt < MAX_TRANSACTION_ATTEMPTS
      ) {
        continue;
      }

      throw error;
    }
  }

  const error = new Error(
    "Could not complete booking. Please try again."
  );
  error.status = 503;
  throw error;
}

// Create a reservation. This legacy endpoint does not collect payment.
router.post("/", async (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error:
        "Invalid booking details. Provide a valid roomId, checkIn and checkOut."
    });
  }

  const checkIn = new Date(parsed.data.checkIn);
  const checkOut = new Date(parsed.data.checkOut);

  if (checkIn <= new Date()) {
    return res.status(400).json({
      error: "Check-in must be in the future"
    });
  }

  if (checkOut <= checkIn) {
    return res.status(400).json({
      error: "Check-out must be after check-in"
    });
  }

  try {
    const booking = await createBookingWithRetry({
      userId: req.user.sub,
      roomId: parsed.data.roomId,
      checkIn,
      checkOut
    });

    return res.status(201).json({
      message: "Reservation created. Payment is not included.",
      booking
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        error: error.message
      });
    }

    throw error;
  }
});

// List only the authenticated customer's reservations.
router.get("/my", async (req, res) => {
  const bookings = await prisma.booking.findMany({
    where: { userId: req.user.sub },
    include: {
      room: {
        include: {
          hotel: true
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return res.json({
    count: bookings.length,
    bookings
  });
});

// View one reservation, never another customer's reservation.
router.get("/:id", async (req, res) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: req.params.id,
      userId: req.user.sub
    },
    include: {
      room: {
        include: {
          hotel: true
        }
      }
    }
  });

  if (!booking) {
    return res.status(404).json({
      error: "Booking not found"
    });
  }

  return res.json({ booking });
});

// Cancel a reservation safely, including refund handling for captured payments.
router.patch("/:id/cancel", async (req, res) => {
  let cancellation;

  try {
    cancellation = await prisma.$transaction(
      async (tx) => {
        // Use the same lock order as payment finalization:
        // Booking first, then Payment.
        await tx.$queryRawUnsafe(
          'SELECT "id" FROM "Booking" WHERE "id" = $1 FOR UPDATE',
          req.params.id
        );

        const booking = await tx.booking.findFirst({
          where: {
            id: req.params.id,
            userId: req.user.sub
          }
        });

        if (!booking) {
          return { outcome: "not_found" };
        }

        if (!ACTIVE_STATUSES.includes(booking.status)) {
          return { outcome: "not_cancellable" };
        }

        await tx.$queryRawUnsafe(
          'SELECT "id" FROM "Payment" WHERE "bookingId" = $1 FOR UPDATE',
          booking.id
        );

        const payments = await tx.payment.findMany({
          where: { bookingId: booking.id },
          orderBy: { createdAt: "asc" }
        });

        const refundPayments = payments.filter((payment) =>
          [
            "CAPTURED",
            "REFUND_PENDING",
            "REFUND_FAILED"
          ].includes(payment.status)
        );

        // Never cancel a paid booking without retaining enough information
        // to identify and refund the captured Razorpay payment.
        const missingPaymentId = refundPayments.some(
          (payment) => !payment.razorpayPaymentId
        );

        if (missingPaymentId) {
          return { outcome: "payment_review_required" };
        }

        // Cancel the booking and mark any captured payments for refund
        // in the same database transaction.
        await tx.booking.update({
          where: { id: booking.id },
          data: { status: "CANCELLED" }
        });

        await tx.payment.updateMany({
          where: {
            bookingId: booking.id,
            status: "CREATED"
          },
          data: {
            status: "CANCELLED",
            failureReason: "Booking cancelled by customer"
          }
        });

        for (const payment of refundPayments) {
          if (payment.status === "CAPTURED") {
            await tx.payment.update({
              where: { id: payment.id },
              data: {
                status: "REFUND_PENDING",
                failureReason: "Booking cancelled by customer"
              }
            });
          }
        }

        return {
          outcome: "cancelled",
          bookingId: booking.id,
          refundPaymentIds: refundPayments.map(
            (payment) => payment.id
          )
        };
      },
      {
        isolationLevel: "Serializable",
        maxWait: 5000,
        timeout: 10000
      }
    );
  } catch (error) {
    if (isSerializationConflict(error)) {
      return res.status(409).json({
        error: "Booking status changed. Refresh and try again."
      });
    }

    throw error;
  }

  if (cancellation.outcome === "not_found") {
    return res.status(404).json({
      error: "Booking not found"
    });
  }

  if (cancellation.outcome === "not_cancellable") {
    return res.status(409).json({
      error: "This booking cannot be cancelled"
    });
  }

  if (cancellation.outcome === "payment_review_required") {
    return res.status(409).json({
      error:
        "This booking has a payment that requires manual review. Contact support before cancelling."
    });
  }

  const refundResults = [];

  for (const paymentId of cancellation.refundPaymentIds) {
    try {
      const result = await ensureRefund(paymentId);

      refundResults.push({
        paymentId,
        status: result.outcome
      });
    } catch (error) {
      await prisma.payment.updateMany({
        where: {
          id: paymentId,
          status: "REFUND_PENDING"
        },
        data: {
          failureReason:
            `Cancellation refund requires reconciliation: ${error.message}`
        }
      }).catch(() => {});

      refundResults.push({
        paymentId,
        status: "refund_pending"
      });
    }
  }

  const updatedBooking = await prisma.booking.findUnique({
    where: { id: cancellation.bookingId },
    include: {
      room: {
        include: {
          hotel: true
        }
      }
    }
  });

  const refundPending = refundResults.some(
    (item) => item.status === "refund_pending"
  );

  const refundFailed = refundResults.some(
    (item) => item.status === "refund_failed"
  );

  return res.json({
    message: refundPending
      ? "Booking cancelled. Refund processing is still pending."
      : refundFailed
        ? "Booking cancelled. A refund requires manual review."
        : "Booking cancelled successfully",
    booking: updatedBooking,
    refunds: refundResults
  });
});

module.exports = router;
