
import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  vi
} from "vitest";
import request from "supertest";
import { randomUUID } from "node:crypto";
import app from "../src/app.js";
import prisma from "../src/config/database.js";

// Use the actual CommonJS module object.
// payment-finalization.js uses require(), so spy on this same object.
const razorpay = require("../src/services/razorpay.js");

const razorpayMocks = {
  fetchRefunds: vi.spyOn(razorpay, "fetchRefunds"),
  createRefund: vi.spyOn(razorpay, "createRefund")
};

const {
  finalizeCapturedPayment,
  ensureRefund
} = require("../src/services/payment-finalization.js");

const roomId = "20000000-0000-4000-8000-000000000001";
const email = `payment-test-${randomUUID()}@example.test`;

let userId;
const bookingIds = [];

function providerPayment(payment, overrides = {}) {
  return {
    id: `pay_${randomUUID().replaceAll("-", "")}`,
    order_id: payment.razorpayOrderId,
    status: "captured",
    currency: "INR",
    amount: Math.round(payment.amount * 100),
    ...overrides
  };
}

async function createTestRecords({
  holdExpiresAt = new Date(Date.now() + 10 * 60 * 1000),
  paymentStatus = "CREATED",
  razorpayPaymentId = null
} = {}) {
  const checkIn = new Date();
  checkIn.setUTCDate(checkIn.getUTCDate() + 30);

  const checkOut = new Date(checkIn);
  checkOut.setUTCDate(checkOut.getUTCDate() + 2);

  const booking = await prisma.booking.create({
    data: {
      userId,
      roomId,
      checkIn,
      checkOut,
      total: 1000,
      status: "PENDING",
      holdExpiresAt
    }
  });

  bookingIds.push(booking.id);

  const payment = await prisma.payment.create({
    data: {
      bookingId: booking.id,
      amount: 1000,
      currency: "INR",
      status: paymentStatus,
      provider: "RAZORPAY",
      razorpayOrderId: `order_${randomUUID().replaceAll("-", "")}`,
      razorpayPaymentId
    }
  });

  return { booking, payment };
}

describe("Payment finalization service integration tests", () => {
  beforeAll(async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Payment Test Customer",
        email,
        password: "PaymentTest123!"
      });

    expect(response.status).toBe(201);
    userId = response.body.user.id;
  });

  beforeEach(() => {
    razorpayMocks.fetchRefunds.mockReset();
    razorpayMocks.createRefund.mockReset();

    // Default behavior: no existing refund.
    razorpayMocks.fetchRefunds.mockResolvedValue({
      items: []
    });

    // Default behavior: newly created refund is processed.
    razorpayMocks.createRefund.mockImplementation(
      async (_paymentId, _amount, receipt) => ({
        id: `rfnd_${randomUUID().replaceAll("-", "")}`,
        status: "processed",
        amount: 100000,
        receipt
      })
    );
  });

  it("confirms a booking after a matching captured payment", async () => {
    const { booking, payment } = await createTestRecords();
    const captured = providerPayment(payment);

    const result = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: captured,
      signature: "verified-test-signature"
    });

    expect(result.outcome).toBe("booking_confirmed");
    expect(result.bookingId).toBe(booking.id);

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    const updatedPayment = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
    expect(updatedPayment.status).toBe("CAPTURED");
    expect(updatedPayment.razorpayPaymentId).toBe(captured.id);
    expect(updatedPayment.razorpaySignature).toBe(
      "verified-test-signature"
    );
  });

  it("does not confirm the same payment twice", async () => {
    const { booking, payment } = await createTestRecords();
    const captured = providerPayment(payment);

    const first = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: captured
    });

    const second = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: captured
    });

    expect(first.outcome).toBe("booking_confirmed");
    expect(second.outcome).toBe("already_confirmed");

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
  });

  it("flags a captured payment with the wrong order ID", async () => {
    const { payment } = await createTestRecords();

    const result = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: providerPayment(payment, {
        order_id: "order_wrong"
      })
    });

    expect(result.outcome).toBe("review_required");

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REVIEW_REQUIRED");
  });

  it("flags a captured payment with the wrong amount", async () => {
    const { payment } = await createTestRecords();

    const result = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: providerPayment(payment, {
        amount: 99999
      })
    });

    expect(result.outcome).toBe("review_required");

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REVIEW_REQUIRED");
  });

  it("flags a captured payment with the wrong currency", async () => {
    const { payment } = await createTestRecords();

    const result = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: providerPayment(payment, {
        currency: "USD"
      })
    });

    expect(result.outcome).toBe("review_required");
  });

  it("requires a captured provider payment", async () => {
    const { payment } = await createTestRecords();

    await expect(
      finalizeCapturedPayment({
        paymentRecordId: payment.id,
        providerPayment: providerPayment(payment, {
          status: "authorized"
        })
      })
    ).rejects.toThrow("A captured Razorpay payment is required");
  });

  it("marks an expired booking for refund instead of confirming it", async () => {
    const { booking, payment } = await createTestRecords({
      holdExpiresAt: new Date(Date.now() - 60 * 1000)
    });

    const captured = providerPayment(payment);

    const result = await finalizeCapturedPayment({
      paymentRecordId: payment.id,
      providerPayment: captured
    });

    expect(result.outcome).toBe("refund_required");

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    const updatedPayment = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updatedBooking.status).toBe("CANCELLED");
    expect(updatedPayment.status).toBe("REFUND_PENDING");
    expect(updatedPayment.razorpayPaymentId).toBe(captured.id);
  });

  it("returns payment_record_not_found for an unknown local payment", async () => {
    const result = await finalizeCapturedPayment({
      paymentRecordId: randomUUID(),
      providerPayment: {
        id: "pay_unknown",
        order_id: "order_unknown",
        status: "captured",
        currency: "INR",
        amount: 100000
      }
    });

    expect(result.outcome).toBe("payment_record_not_found");
  });

  it("marks a processed refund as REFUNDED", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    const refund = {
      id: `rfnd_${randomUUID().replaceAll("-", "")}`,
      status: "processed",
      amount: 100000,
      receipt: `mr-${payment.id}`
    };

    razorpayMocks.fetchRefunds.mockResolvedValueOnce({
      items: [refund]
    });

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("refunded");

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REFUNDED");
    expect(updated.refundId).toBe(refund.id);
    expect(updated.refundedAmount).toBe(1000);

    expect(razorpayMocks.createRefund).not.toHaveBeenCalled();
  });

  it("keeps a pending refund in REFUND_PENDING", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    razorpayMocks.createRefund.mockResolvedValueOnce({
      id: "rfnd_pending_test",
      status: "pending",
      amount: 100000,
      receipt: `mr-${payment.id}`
    });

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("refund_pending");

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REFUND_PENDING");
    expect(updated.refundStatus).toBe("pending");
  });

  it("marks a failed refund as REFUND_FAILED", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    razorpayMocks.createRefund.mockResolvedValueOnce({
      id: "rfnd_failed_test",
      status: "failed",
      amount: 100000,
      receipt: `mr-${payment.id}`
    });

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("refund_failed");

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REFUND_FAILED");
    expect(updated.refundStatus).toBe("failed");
    expect(updated.failureReason).toBeTruthy();
  });

  it("does not create a refund if the existing-refund lookup fails", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    razorpayMocks.fetchRefunds.mockRejectedValueOnce(
      new Error("Razorpay lookup unavailable")
    );

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("refund_pending");
    expect(razorpayMocks.createRefund).not.toHaveBeenCalled();

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REFUND_PENDING");
  });

  it("reconciles an ambiguous refund creation using its stable receipt", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    const existingRefund = {
      id: "rfnd_reconciled_test",
      status: "processed",
      amount: 100000,
      receipt: `mr-${payment.id}`
    };

    razorpayMocks.fetchRefunds
      .mockResolvedValueOnce({ items: [] })
      .mockResolvedValueOnce({ items: [existingRefund] });

    razorpayMocks.createRefund.mockRejectedValueOnce(
      new Error("Network timeout")
    );

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("refunded");
    expect(result.refundId).toBe(existingRefund.id);
    expect(razorpayMocks.createRefund).toHaveBeenCalledTimes(1);

    const updated = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    expect(updated.status).toBe("REFUNDED");
    expect(updated.refundId).toBe(existingRefund.id);
  });

  it("returns already_refunded without calling Razorpay again", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUNDED",
      razorpayPaymentId: `pay_${randomUUID().replaceAll("-", "")}`
    });

    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        refundId: "rfnd_already_done",
        refundStatus: "processed"
      }
    });

    const result = await ensureRefund(payment.id);

    expect(result.outcome).toBe("already_refunded");
    expect(result.refundId).toBe("rfnd_already_done");
    expect(razorpayMocks.fetchRefunds).not.toHaveBeenCalled();
    expect(razorpayMocks.createRefund).not.toHaveBeenCalled();
  });

  it("rejects refund handling without a captured Razorpay payment ID", async () => {
    const { payment } = await createTestRecords({
      paymentStatus: "REFUND_PENDING"
    });

    await expect(
      ensureRefund(payment.id)
    ).rejects.toThrow(
      "Payment record or captured Razorpay payment ID is missing"
    );
  });
});

afterAll(async () => {
  try {
    if (bookingIds.length) {
      await prisma.payment.deleteMany({
        where: {
          bookingId: { in: bookingIds }
        }
      });

      await prisma.booking.deleteMany({
        where: {
          id: { in: bookingIds }
        }
      });
    }

    if (userId) {
      await prisma.user.deleteMany({
        where: { id: userId }
      });
    }
  } finally {
    vi.restoreAllMocks();
    await prisma.$disconnect();
  }
});
