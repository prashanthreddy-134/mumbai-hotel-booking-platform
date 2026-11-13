
import { describe, it, expect, afterEach } from "vitest";
import crypto from "node:crypto";
import razorpay from "../src/services/razorpay.js";

const secret = "test_secret_for_unit_tests";

function makeCheckoutSignature(orderId, paymentId) {
  return crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
}

describe("Razorpay checkout signature verification", () => {
  it("accepts a valid checkout signature", () => {
    const orderId = "order_test_123";
    const paymentId = "pay_test_456";

    const signature = makeCheckoutSignature(orderId, paymentId);

    expect(
      razorpay.verifyCheckoutSignature({
        orderId,
        paymentId,
        signature,
        secret
      })
    ).toBe(true);
  });

  it("rejects an incorrect signature", () => {
    expect(
      razorpay.verifyCheckoutSignature({
        orderId: "order_test_123",
        paymentId: "pay_test_456",
        signature: "incorrect",
        secret
      })
    ).toBe(false);
  });

  it("rejects missing checkout fields", () => {
    expect(
      razorpay.verifyCheckoutSignature({
        orderId: "",
        paymentId: "pay_test_456",
        signature: "abc",
        secret
      })
    ).toBe(false);
  });

  it("rejects a signature generated for a different order", () => {
    const signature = makeCheckoutSignature(
      "order_original",
      "pay_test_456"
    );

    expect(
      razorpay.verifyCheckoutSignature({
        orderId: "order_another",
        paymentId: "pay_test_456",
        signature,
        secret
      })
    ).toBe(false);
  });
});

describe("Razorpay webhook signature verification", () => {
  const previousSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

  afterEach(() => {
    if (previousSecret === undefined) {
      delete process.env.RAZORPAY_WEBHOOK_SECRET;
    } else {
      process.env.RAZORPAY_WEBHOOK_SECRET = previousSecret;
    }
  });

  it("accepts a valid raw-body webhook signature", () => {
    const rawBody = Buffer.from(
      JSON.stringify({ event: "payment.captured" })
    );

    process.env.RAZORPAY_WEBHOOK_SECRET = secret;

    const signature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    expect(
      razorpay.verifyWebhookSignature(rawBody, signature)
    ).toBe(true);
  });

  it("rejects a modified webhook body", () => {
    const originalBody = Buffer.from('{"event":"payment.captured"}');
    const modifiedBody = Buffer.from('{"event":"payment.failed"}');

    process.env.RAZORPAY_WEBHOOK_SECRET = secret;

    const signature = crypto
      .createHmac("sha256", secret)
      .update(originalBody)
      .digest("hex");

    expect(
      razorpay.verifyWebhookSignature(modifiedBody, signature)
    ).toBe(false);
  });

  it("rejects a missing webhook secret", () => {
    delete process.env.RAZORPAY_WEBHOOK_SECRET;

    expect(
      razorpay.verifyWebhookSignature(
        Buffer.from("{}"),
        "invalid"
      )
    ).toBe(false);
  });
});
