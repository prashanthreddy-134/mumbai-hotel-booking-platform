
const crypto = require("node:crypto");

const API_BASE = "https://api.razorpay.com/v1";
const REQUEST_TIMEOUT_MS = 15000;

function getCredentials() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    const error = new Error("Razorpay is not configured");
    error.status = 503;
    throw error;
  }

  return { keyId, keySecret };
}

function getPublicKeyId() {
  return getCredentials().keyId;
}

function getAuthHeader() {
  const { keyId, keySecret } = getCredentials();

  return `Basic ${Buffer.from(
    `${keyId}:${keySecret}`
  ).toString("base64")}`;
}

async function razorpayRequest(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });
  } catch (cause) {
    console.error("RAZORPAY NETWORK ERROR:", {
      path,
      message: cause.message,
      name: cause.name
    });

    const error = new Error(
      "Could not reach Razorpay. Check server network connectivity."
    );

    error.status = 502;
    error.cause = cause;
    throw error;
  }

  let data;

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    const providerCode = data.error?.code || "UNKNOWN";
    const providerMessage =
      data.error?.description || "Razorpay request failed";

    console.error("RAZORPAY API ERROR:", {
  path,
  status: response.status,
  error: data.error || null
});

    const error = new Error(providerMessage);

    error.status = 502;
    error.providerStatus = response.status;
    error.providerCode = providerCode;

    throw error;
  }

  console.log("RAZORPAY REQUEST SUCCESS:", {
    path,
    status: response.status
  });

  return data;
}

async function createOrder({ amount, receipt, notes = {} }) {
  if (!Number.isSafeInteger(amount) || amount <= 0) {
    throw new Error(
      "Payment amount must be a positive integer in paise"
    );
  }

  return razorpayRequest("/orders", {
    method: "POST",
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: String(receipt).slice(0, 40),
      notes
    })
  });
}

async function fetchPayment(paymentId) {
  return razorpayRequest(
    `/payments/${encodeURIComponent(paymentId)}`,
    { method: "GET" }
  );
}

async function capturePayment(paymentId, amount) {
  if (!Number.isSafeInteger(amount) || amount <= 0) {
    throw new Error(
      "Capture amount must be a positive integer in paise"
    );
  }

  return razorpayRequest(
    `/payments/${encodeURIComponent(paymentId)}/capture`,
    {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency: "INR"
      })
    }
  );
}

async function createRefund(paymentId, amount, receipt) {
  const body = {};

  if (amount !== undefined) {
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      throw new Error(
        "Refund amount must be a positive integer in paise"
      );
    }

    body.amount = amount;
  }

  if (receipt !== undefined) {
    if (
      typeof receipt !== "string" ||
      receipt.length < 1 ||
      receipt.length > 40
    ) {
      throw new Error(
        "Refund receipt must contain 1 to 40 characters"
      );
    }

    body.receipt = receipt;
  }

  return razorpayRequest(
    `/payments/${encodeURIComponent(paymentId)}/refund`,
    {
      method: "POST",
      body: JSON.stringify(body)
    }
  );
}

async function fetchRefunds(paymentId) {
  return razorpayRequest(
    `/payments/${encodeURIComponent(paymentId)}/refunds`,
    { method: "GET" }
  );
}

function safeCompareHex(expected, received) {
  if (
    typeof expected !== "string" ||
    typeof received !== "string" ||
    !/^[a-f0-9]{64}$/i.test(expected) ||
    !/^[a-f0-9]{64}$/i.test(received)
  ) {
    return false;
  }

  const expectedBuffer = Buffer.from(expected, "hex");
  const receivedBuffer = Buffer.from(received, "hex");

  return (
    expectedBuffer.length === receivedBuffer.length &&
    crypto.timingSafeEqual(
      expectedBuffer,
      receivedBuffer
    )
  );
}

function verifyCheckoutSignature({
  orderId,
  paymentId,
  signature,
  secret
}) {
  if (
    typeof orderId !== "string" ||
    typeof paymentId !== "string" ||
    typeof signature !== "string" ||
    typeof secret !== "string" ||
    !orderId ||
    !paymentId ||
    !secret
  ) {
    return false;
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return safeCompareHex(expected, signature);
}

function verifyWebhookSignature(rawBody, signature) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (
    !secret ||
    !Buffer.isBuffer(rawBody) ||
    !signature
  ) {
    return false;
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  return safeCompareHex(expected, signature);
}

module.exports = {
  getPublicKeyId,
  createOrder,
  fetchPayment,
  capturePayment,
  createRefund,
  fetchRefunds,
  verifyCheckoutSignature,
  verifyWebhookSignature
};
