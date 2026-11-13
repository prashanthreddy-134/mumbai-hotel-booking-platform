import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { randomUUID } from "node:crypto";
import app from "../src/app.js";
import prisma from "../src/config/database.js";

const roomId = "20000000-0000-4000-8000-000000000001";
const email1 = `booking-test-${randomUUID()}@example.test`;
const email2 = `booking-owner-${randomUUID()}@example.test`;
const password = "BookingTest123!";

let token1;
let token2;
let userId1;
let userId2;
let bookingId;

const checkInDate = new Date();
checkInDate.setUTCDate(checkInDate.getUTCDate() + 30);
checkInDate.setUTCHours(15, 0, 0, 0);

const checkOutDate = new Date(checkInDate);
checkOutDate.setUTCDate(checkOutDate.getUTCDate() + 2);

const checkIn = checkInDate.toISOString();
const checkOut = checkOutDate.toISOString();

describe("Booking API integration tests", () => {
  beforeAll(async () => {
    const first = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Booking Test Customer",
        email: email1,
        password
      });

    expect(first.status).toBe(201);
    token1 = first.body.token;
    userId1 = first.body.user.id;

    const second = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Another Test Customer",
        email: email2,
        password
      });

    expect(second.status).toBe(201);
    token2 = second.body.token;
    userId2 = second.body.user.id;
  });

  it("rejects booking without authentication", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .send({ roomId, checkIn, checkOut });

    expect(response.status).toBe(401);
  });

  it("rejects invalid booking details", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token1}`)
      .send({
        roomId: "invalid-room-id",
        checkIn,
        checkOut
      });

    expect(response.status).toBe(400);
  });

  it("rejects check-in dates in the past", async () => {
    const past = new Date(Date.now() - 86400000).toISOString();

    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token1}`)
      .send({
        roomId,
        checkIn: past,
        checkOut
      });

    expect(response.status).toBe(400);
  });

  it("rejects checkout before check-in", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token1}`)
      .send({
        roomId,
        checkIn: checkOut,
        checkOut: checkIn
      });

    expect(response.status).toBe(400);
  });

  it("returns 404 for an unknown room", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token1}`)
      .send({
        roomId: "90000000-0000-4000-8000-000000000099",
        checkIn,
        checkOut
      });

    expect(response.status).toBe(404);
  });

  it("creates a pending reservation and calculates the total", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token1}`)
      .send({ roomId, checkIn, checkOut });

    expect(response.status).toBe(201);
    expect(response.body.booking.status).toBe("PENDING");
    expect(response.body.booking.userId).toBe(userId1);
    expect(response.body.booking.roomId).toBe(roomId);
    expect(response.body.booking.total).toBeGreaterThan(0);
    expect(response.body.booking.room.hotel).toBeTruthy();

    bookingId = response.body.booking.id;
  });

  it("rejects an overlapping reservation for the same room", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token2}`)
      .send({ roomId, checkIn, checkOut });

    expect(response.status).toBe(409);
  });

  it("lists only the authenticated customer's bookings", async () => {
    const response = await request(app)
      .get("/api/v1/bookings/my")
      .set("Authorization", `Bearer ${token1}`);

    expect(response.status).toBe(200);
    expect(response.body.count).toBeGreaterThan(0);
    expect(response.body.bookings.every(
      booking => booking.userId === userId1
    )).toBe(true);
  });

  it("returns the customer's own booking", async () => {
    const response = await request(app)
      .get(`/api/v1/bookings/${bookingId}`)
      .set("Authorization", `Bearer ${token1}`);

    expect(response.status).toBe(200);
    expect(response.body.booking.id).toBe(bookingId);
  });

  it("does not reveal another customer's booking", async () => {
    const response = await request(app)
      .get(`/api/v1/bookings/${bookingId}`)
      .set("Authorization", `Bearer ${token2}`);

    expect(response.status).toBe(404);
  });

  it("does not allow another customer to cancel the booking", async () => {
    const response = await request(app)
      .patch(`/api/v1/bookings/${bookingId}/cancel`)
      .set("Authorization", `Bearer ${token2}`);

    expect(response.status).toBe(404);
  });

  it("allows the owner to cancel their pending booking", async () => {
    const response = await request(app)
      .patch(`/api/v1/bookings/${bookingId}/cancel`)
      .set("Authorization", `Bearer ${token1}`);

    expect(response.status).toBe(200);
    expect(response.body.booking.status).toBe("CANCELLED");
  });

  it("rejects cancellation of an already cancelled booking", async () => {
    const response = await request(app)
      .patch(`/api/v1/bookings/${bookingId}/cancel`)
      .set("Authorization", `Bearer ${token1}`);

    expect(response.status).toBe(409);
  });

  it("allows another customer to reserve the room after cancellation", async () => {
    const response = await request(app)
      .post("/api/v1/bookings")
      .set("Authorization", `Bearer ${token2}`)
      .send({ roomId, checkIn, checkOut });

    expect(response.status).toBe(201);
    expect(response.body.booking.status).toBe("PENDING");
    expect(response.body.booking.userId).toBe(userId2);
  });
});

afterAll(async () => {
  try {
    const userIds = [userId1, userId2].filter(Boolean);

    if (userIds.length) {
      await prisma.booking.deleteMany({
        where: { userId: { in: userIds } }
      });

      await prisma.user.deleteMany({
        where: { id: { in: userIds } }
      });
    }
  } finally {
    await prisma.$disconnect();
  }
});
