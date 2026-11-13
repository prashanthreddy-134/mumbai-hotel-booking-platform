
const express = require("express");
const { z } = require("zod");
const prisma = require("../config/database");
const authenticate = require("../middleware/auth");
const razorpay = require("../services/razorpay");
const {
  finalizeCapturedPayment,
  ensureRefund
} = require("../services/payment-finalization");

const router = express.Router();

router.use(authenticate);

const HOLD_MINUTES = 10;

const ACTIVE_BOOKING_FILTER = (now) => ({
  OR: [
    { status: "CONFIRMED" },
    {
      status: "PENDING",
      OR: [
        { holdExpiresAt: null },
        { holdExpiresAt: { gt: now } }
      ]
    }
  ]
});

const orderSchema = z.object({
  roomId: z.string().uuid(),
  checkIn: z.string().datetime({ offset: true }),
  checkOut: z.string().datetime({ offset: true }),
  guestName: z.string().trim().min(2).max(100),
  guestEmail: z.string().trim().email().max(254),
  guestPhone: z.string().trim().min(8).max(20),
  guestCount: z.coerce.number().int().min(1).max(10),
  specialRequests: z.string().trim().max(1000).optional().default("")
});

const verifySchema = z.object({
  bookingId: z.string().uuid(),
  razorpay_order_id: z.string().min(1).max(100),
  razorpay_payment_id: z.string().min(1).max(100),
  razorpay_signature: z.string().regex(/^[a-f0-9]{64}$/i)
});

function calculateNights(checkIn, checkOut) {
  return Math.ceil(
    (checkOut.getTime() - checkIn.getTime()) / 86400000
  );
}

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

async function createRoomHold(data) {
  return prisma.$transaction(
    async (tx) => {
      const room = await tx.room.findUnique({
        where: { id: data.roomId },
        include: { hotel: true }
      });

      if (!room) {
        throw httpError(404, "Room not found");
      }

      if (data.guestCount > room.capacity) {
        throw httpError(
          400,
          `This room allows a maximum of ${room.capacity} guests`
        );
      }

      const now = new Date();

      const overlap = await tx.booking.findFirst({
        where: {
          roomId: room.id,
          ...ACTIVE_BOOKING_FILTER(now),
          checkIn: { lt: data.checkOut },
          checkOut: { gt: data.checkIn }
        },
        select: { id: true }
      });

      if (overlap) {
        throw httpError(409, "Room is not available for these dates");
      }

      const nights = calculateNights(data.checkIn, data.checkOut);
      const total = Number((room.price * nights).toFixed(2));
      const holdExpiresAt = new Date(
        now.getTime() + HOLD_MINUTES * 60000
      );

      const booking = await tx.booking.create({
        data: {
          userId: data.userId,
          roomId: room.id,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
          status: "PENDING",
          total,
          guestName: data.guestName,
          guestEmail: data.guestEmail,
          guestPhone: data.guestPhone,
          guestCount: data.guestCount,
          specialRequests: data.specialRequests,
          holdExpiresAt
        },
        include: {
          room: {
            include: {
              hotel: true,
              amenities: true
            }
          }
        }
      });

      return { booking, total, holdExpiresAt };
    },
    {
      isolationLevel: "Serializable",
      maxWait: 5000,
      timeout: 10000
    }
  );
}

// Create a room hold and a local payment record before creating the
// Razorpay order. This gives incoming webhooks a local payment to reconcile.
router.post("/orders", async (req, res) => {
  const parsed = orderSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid checkout details",
      details: parsed.error.flatten()
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

  let keyId;

  try {
    keyId = razorpay.getPublicKeyId();
  } catch (error) {
    return res.status(error.status || 503).json({
      error: error.message
    });
  }

  let hold;
  let payment;

  try {
    hold = await createRoomHold({
      ...parsed.data,
      userId: req.user.sub,
      checkIn,
      checkOut
    });

    payment = await prisma.payment.create({
      data: {
        bookingId: hold.booking.id,
        amount: hold.total,
        currency: "INR",
        status: "CREATED",
        provider: "RAZORPAY"
      }
    });

    const order = await razorpay.createOrder({
      amount: Math.round(hold.total * 100),
      receipt: hold.booking.id,
      notes: {
        bookingId: hold.booking.id,
        paymentRecordId: payment.id,
        userId: req.user.sub
      }
    });

    const savedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: { razorpayOrderId: order.id }
    });

    return res.status(201).json({
      message: "Room held. Complete payment within 10 minutes.",
      keyId,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency
      },
      paymentId: savedPayment.id,
      booking: hold.booking,
      holdExpiresAt: hold.holdExpiresAt,
      price: {
        nights: calculateNights(checkIn, checkOut),
        roomRatePerNight: hold.booking.room.price,
        total: hold.total,
        currency: "INR",
        taxesIncluded: true
      }
    });
  } catch (error) {
    if (payment?.id) {
      await prisma.payment.updateMany({
        where: {
          id: payment.id,
          status: "CREATED"
        },
        data: {
          status: "FAILED",
          failureReason: `Order creation failed or could not be saved: ${error.message}`
        }
      }).catch(() => {});
    }

    if (hold?.booking?.id) {
      await prisma.booking.updateMany({
        where: {
          id: hold.booking.id,
          userId: req.user.sub,
          status: "PENDING"
        },
        data: { status: "CANCELLED" }
      }).catch(() => {});
    }

    if (error.status) {
      return res.status(error.status).json({
        error: error.message
      });
    }

    throw error;
  }
});

// Verify the Razorpay callback, capture if necessary, and use the shared
// finalization service for the actual booking/payment state transition.
router.post("/verify", async (req, res) => {
  const parsed = verifySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid payment verification data"
    });
  }

  const {
    bookingId,
    razorpay_order_id: orderId,
    razorpay_payment_id: paymentId,
    razorpay_signature: signature
  } = parsed.data;

  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      userId: req.user.sub
    },
    include: { payments: true }
  });

  if (!booking) {
    return res.status(404).json({
      error: "Booking not found"
    });
  }

  const paymentRecord = booking.payments.find(
    (item) => item.razorpayOrderId === orderId
  );

  if (!paymentRecord) {
    return res.status(404).json({
      error: "Payment order not found"
    });
  }

  const signatureValid = razorpay.verifyCheckoutSignature({
    orderId,
    paymentId,
    signature,
    secret: process.env.RAZORPAY_KEY_SECRET
  });

  if (!signatureValid) {
    return res.status(400).json({
      error: "Invalid payment signature"
    });
  }

  const providerPayment = await razorpay.fetchPayment(paymentId);

  if (
    providerPayment.order_id !== orderId ||
    providerPayment.currency !== paymentRecord.currency ||
    providerPayment.amount !== Math.round(paymentRecord.amount * 100)
  ) {
    return res.status(400).json({
      error: "Payment details do not match this booking"
    });
  }

  if (providerPayment.status === "failed") {
    await prisma.payment.updateMany({
      where: {
        id: paymentRecord.id,
        status: { notIn: ["CAPTURED", "REFUNDED", "REFUND_PENDING"] }
      },
      data: {
        status: "FAILED",
        razorpayPaymentId: paymentId,
        failureReason:
          providerPayment.error_description ||
          providerPayment.error_reason ||
          "Razorpay payment failed"
      }
    });

    return res.status(402).json({
      error: "Razorpay reports that this payment failed"
    });
  }

  if (!["authorized", "captured"].includes(providerPayment.status)) {
    return res.status(402).json({
      error: `Payment is not ready for capture. Current status: ${providerPayment.status}`
    });
  }

  let capturedPayment = providerPayment;

  if (providerPayment.status === "authorized") {
    const currentBooking = await prisma.booking.findFirst({
      where: {
        id: booking.id,
        userId: req.user.sub
      }
    });

    const holdIsValid =
      currentBooking &&
      currentBooking.status === "PENDING" &&
      currentBooking.holdExpiresAt &&
      currentBooking.holdExpiresAt > new Date();

    if (!holdIsValid) {
      await prisma.$transaction(async (tx) => {
        await tx.booking.updateMany({
          where: {
            id: booking.id,
            userId: req.user.sub,
            status: "PENDING"
          },
          data: { status: "CANCELLED" }
        });

        await tx.payment.updateMany({
          where: {
            id: paymentRecord.id,
            status: { not: "CAPTURED" }
          },
          data: {
            status: "EXPIRED",
            razorpayPaymentId: paymentId,
            failureReason: "Payment was authorized after the room hold expired"
          }
        });
      });

      return res.status(409).json({
        error: "The room hold expired. The authorized payment was not captured."
      });
    }

    capturedPayment = await razorpay.capturePayment(
      paymentId,
      providerPayment.amount
    );

    if (capturedPayment.status !== "captured") {
      return res.status(402).json({
        error: "Razorpay did not confirm payment capture"
      });
    }
  }

  const result = await finalizeCapturedPayment({
    paymentRecordId: paymentRecord.id,
    providerPayment: capturedPayment,
    signature
  });

  if (result.outcome === "refund_required") {
    const refundResult = await ensureRefund(result.paymentRecordId);

    return res.status(409).json({
      error: "Payment was captured, but the booking could not be confirmed.",
      refund: refundResult.outcome
    });
  }

  if (result.outcome === "review_required") {
    return res.status(409).json({
      error: "Payment requires manual review. Do not retry the payment."
    });
  }

  if (
    result.outcome !== "booking_confirmed" &&
    result.outcome !== "already_confirmed"
  ) {
    return res.status(409).json({
      error: "Payment could not be finalized. Please contact support."
    });
  }

  return res.json({
    message: result.outcome === "already_confirmed"
      ? "Payment already verified"
      : "Payment verified and booking confirmed",
    bookingId: booking.id,
    status: "CONFIRMED"
  });
});

module.exports = router;
