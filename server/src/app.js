
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// Razorpay signature verification requires the exact raw request bytes.
// This must be registered before express.json().
app.use(
  "/api/v1/payments",
  express.raw({ type: "application/json", limit: "1mb" }),
  require("./routes/payments.webhook.routes")
);

app.use(express.json({ limit: "1mb" }));

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/hotels", require("./routes/hotels.routes"));
app.use("/api/v1/bookings", require("./routes/bookings.routes"));
app.use("/api/v1/checkout", require("./routes/checkout.routes"));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "mumbai-hotel-api",
    time: new Date().toISOString()
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    error: err.status ? err.message : "Internal server error"
  });
});

module.exports = app;
