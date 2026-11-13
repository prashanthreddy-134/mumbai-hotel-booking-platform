
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
import { randomUUID, createHmac } from "node:crypto";

import app from "../src/app.js";
import prisma from "../src/config/database.js";

const razorpay = require("../src/services/razorpay.js");

const fetchPaymentMock = vi.spyOn(razorpay, "fetchPayment");

const roomId = "20000000-0000-4000-8000-000000000001";
const email = `webhook-test-${randomUUID()}@example.test`;

let userId;

const bookingIds = [];
const eventIds = [];

function makeId(prefix) {
  return `${prefix}_${randomUUID().replaceAll("-", "")}`;
}

function signBody(rawBody) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!secret) {
    throw new Error(
      "RAZORPAY_WEBHOOK_SECRET is missing from the test environment"
    );
  }

  return createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
}

function makeWebhookBody(payment, eventType = "payment.captured") {
  return Buffer.from(
    JSON.stringify({
      entity: "event",
      account_id: "acc_test",
      event: eventType,
      contains: ["payment"],
      payload: {
        payment: {
          entity: {
            id: payment.razorpayPaymentId,
            entity: "payment",
            amount: Math.round(payment.amount * 100),
            currency: payment.currency,
            status: "captured",
            order_id: payment.razorpayOrderId
          }
        }
      }
    }),
    "utf8"
  );
}

function makeProviderPayment(payment, overrides = {}) {
  return {
    id: payment.razorpayPaymentId,
    order_id: payment.razorpayOrderId,
    status: "captured",
    currency: payment.currency,
    amount: Math.round(payment.amount * 100),
    ...overrides
  };
}

async function createTestPayment({
  holdExpiresAt = new Date(Date.now() + 10 * 60 * 1000)
} = {}) {
  const checkIn = new Date();

  // Keep webhook test reservations away from other test fixtures.
  checkIn.setUTCDate(checkIn.getUTCDate() + 300);

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
      status: "CREATED",
      provider: "RAZORPAY",
      razorpayOrderId: makeId("order"),
      razorpayPaymentId: makeId("pay")
    }
  });

  return { booking, payment };
}

async function sendWebhook(eventId, rawBody, signatureOverride) {
  eventIds.push(eventId);

  const signature = signatureOverride || signBody(rawBody);

  // Send the exact JSON text that was signed.
  // Do not let Supertest serialize the Buffer as an object.
  const rawJson = rawBody.toString("utf8");

  return request(app)
    .post("/api/v1/payments/webhook")
    .set("Content-Type", "application/json")
    .set("Content-Length", String(Buffer.byteLength(rawJson, "utf8")))
    .set("x-razorpay-event-id", eventId)
    .set("x-razorpay-signature", signature)
    .send(rawJson);
}

describe("Razorpay webhook integration tests", () => {
  beforeAll(async () => {
    if (!process.env.RAZORPAY_WEBHOOK_SECRET) {
      throw new Error(
        "Set RAZORPAY_WEBHOOK_SECRET in server/.env before running webhook tests"
      );
    }

    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Webhook Test Customer",
        email,
        password: "WebhookTest123!"
      });

    expect(response.status).toBe(201);

    userId = response.body.user.id;
  });

  beforeEach(() => {
    fetchPaymentMock.mockReset();
  });

  it("confirms a booking after a valid captured-payment webhook", async () => {
    const { booking, payment } = await createTestPayment();

    const eventId = makeId("evt");
    const rawBody = makeWebhookBody(payment);

    fetchPaymentMock.mockResolvedValueOnce(
      makeProviderPayment(payment)
    );

    const response = await sendWebhook(eventId, rawBody);

    expect(response.status).toBe(200);
    expect(response.body.outcome).toBe("booking_confirmed");
    expect(fetchPaymentMock).toHaveBeenCalledTimes(1);

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    const updatedPayment = await prisma.payment.findUnique({
      where: { id: payment.id }
    });

    const storedEvent = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
    expect(updatedPayment.status).toBe("CAPTURED");

    expect(storedEvent.processedAt).toBeTruthy();
    expect(storedEvent.processingToken).toBeNull();
    expect(storedEvent.processingLockExpiresAt).toBeNull();
    expect(storedEvent.attempts).toBe(1);
  });

  it("does not process an already completed duplicate event twice", async () => {
    const { booking, payment } = await createTestPayment();

    const eventId = makeId("evt");
    const rawBody = makeWebhookBody(payment);

    fetchPaymentMock.mockResolvedValueOnce(
      makeProviderPayment(payment)
    );

    const firstResponse = await sendWebhook(eventId, rawBody);

    expect(firstResponse.status).toBe(200);
    expect(firstResponse.body.outcome).toBe("booking_confirmed");

    const secondResponse = await sendWebhook(eventId, rawBody);

    expect(secondResponse.status).toBe(200);
    expect(secondResponse.body.duplicate).toBe(true);
    expect(secondResponse.body.processed).toBe(true);

    expect(fetchPaymentMock).toHaveBeenCalledTimes(1);

    const storedEvent = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(storedEvent.processedAt).toBeTruthy();
    expect(storedEvent.attempts).toBe(1);

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
  });

  it("allows only one simultaneous request to own the event lease", async () => {
    const { booking, payment } = await createTestPayment();

    const eventId = makeId("evt");
    const rawBody = makeWebhookBody(payment);

    let releaseProviderRequest;

    const providerGate = new Promise((resolve) => {
      releaseProviderRequest = resolve;
    });

    let providerRequestStarted;

    const providerStarted = new Promise((resolve) => {
      providerRequestStarted = resolve;
    });

    fetchPaymentMock.mockImplementationOnce(async () => {
      providerRequestStarted();

      await providerGate;

      return makeProviderPayment(payment);
    });

    const firstRequest = sendWebhook(eventId, rawBody);

    // Wait until the first request owns the lease and reaches Razorpay.
    await providerStarted;

    const secondResponse = await sendWebhook(eventId, rawBody);

    expect(secondResponse.status).toBe(503);
    expect(secondResponse.body.outcome).toBe(
      "webhook_processing_in_progress"
    );

    expect(fetchPaymentMock).toHaveBeenCalledTimes(1);

    releaseProviderRequest();

    const firstResponse = await firstRequest;

    expect(firstResponse.status).toBe(200);
    expect(firstResponse.body.outcome).toBe("booking_confirmed");

    const storedEvent = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(storedEvent.processedAt).toBeTruthy();
    expect(storedEvent.attempts).toBe(1);
    expect(storedEvent.processingToken).toBeNull();

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
  });

  it("releases the lease after a provider error and allows a retry", async () => {
    const { booking, payment } = await createTestPayment();

    const eventId = makeId("evt");
    const rawBody = makeWebhookBody(payment);

    fetchPaymentMock
      .mockRejectedValueOnce(
        new Error("Temporary Razorpay outage")
      )
      .mockResolvedValueOnce(
        makeProviderPayment(payment)
      );

    const firstResponse = await sendWebhook(eventId, rawBody);

    expect(firstResponse.status).toBe(500);

    const eventAfterFailure = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(eventAfterFailure.processedAt).toBeNull();
    expect(eventAfterFailure.processingToken).toBeNull();
    expect(eventAfterFailure.processingLockExpiresAt).toBeNull();

    expect(eventAfterFailure.lastError).toContain(
      "Temporary Razorpay outage"
    );

    // Retry using the same event ID and exactly the same body.
    const retryResponse = await sendWebhook(eventId, rawBody);

    expect(retryResponse.status).toBe(200);
    expect(retryResponse.body.outcome).toBe("booking_confirmed");

    expect(fetchPaymentMock).toHaveBeenCalledTimes(2);

    const eventAfterRetry = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(eventAfterRetry.processedAt).toBeTruthy();
    expect(eventAfterRetry.processingToken).toBeNull();
    expect(eventAfterRetry.processingLockExpiresAt).toBeNull();
    expect(eventAfterRetry.attempts).toBe(2);

    const updatedBooking = await prisma.booking.findUnique({
      where: { id: booking.id }
    });

    expect(updatedBooking.status).toBe("CONFIRMED");
  });

  it("rejects an invalid signature without storing the event", async () => {
    const { payment } = await createTestPayment();

    const eventId = makeId("evt");
    const rawBody = makeWebhookBody(payment);

    const response = await sendWebhook(
      eventId,
      rawBody,
      "invalid-signature"
    );

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Invalid webhook signature");

    const storedEvent = await prisma.paymentWebhookEvent.findUnique({
      where: { eventId }
    });

    expect(storedEvent).toBeNull();
    expect(fetchPaymentMock).not.toHaveBeenCalled();
  });
});

afterAll(async () => {
  try {
    if (eventIds.length) {
      await prisma.paymentWebhookEvent.deleteMany({
        where: {
          eventId: {
            in: [...new Set(eventIds)]
          }
        }
      });
    }

    if (bookingIds.length) {
      await prisma.payment.deleteMany({
        where: {
          bookingId: {
            in: bookingIds
          }
        }
      });

      await prisma.booking.deleteMany({
        where: {
          id: {
            in: bookingIds
          }
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
