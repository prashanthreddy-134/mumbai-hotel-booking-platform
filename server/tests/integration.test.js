import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import app from "../src/app.js";
import prisma from "../src/config/database.js";
import { randomUUID } from "node:crypto";

const hotelId = "10000000-0000-4000-8000-000000000001";
const email = `api-test-${randomUUID()}@example.test`;
const password = "TestPassword123!";
let authToken;

describe("Authentication integration tests", () => {
  it("registers a new customer", async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "API Test Customer",
        email,
        password
      });

    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe(email);
    expect(response.body.user.password).toBeUndefined();
    expect(response.body.token).toBeTruthy();

    authToken = response.body.token;
  });

  it("rejects duplicate registration", async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "API Test Customer",
        email,
        password
      });

    expect(response.status).toBe(409);
  });

  it("rejects invalid registration details", async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "A",
        email: "not-an-email",
        password: "123"
      });

    expect(response.status).toBe(400);
  });

  it("logs in with valid credentials", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email, password });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeTruthy();
    expect(response.body.user.password).toBeUndefined();
  });

  it("rejects an incorrect password", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({ email, password: "WrongPassword123!" });

    expect(response.status).toBe(401);
  });

  it("rejects access to /me without a token", async () => {
    const response = await request(app).get("/api/v1/auth/me");

    expect(response.status).toBe(401);
  });

  it("rejects an invalid token", async () => {
    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Authorization", "Bearer invalid-token");

    expect(response.status).toBe(401);
  });

  it("returns the authenticated customer profile", async () => {
    const response = await request(app)
      .get("/api/v1/auth/me")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe(email);
    expect(response.body.user.password).toBeUndefined();
  });
});

describe("Hotel integration tests", () => {
  it("returns the hotel listing", async () => {
    const response = await request(app).get("/api/v1/hotels");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.hotels)).toBe(true);
    expect(response.body.pagination.total).toBeGreaterThan(0);
  });

  it("searches hotels by location or name", async () => {
    const response = await request(app)
      .get("/api/v1/hotels")
      .query({ search: "Bandra" });

    expect(response.status).toBe(200);
    expect(response.body.hotels.length).toBeGreaterThan(0);
  });

  it("supports pagination", async () => {
    const response = await request(app)
      .get("/api/v1/hotels")
      .query({ page: 1, limit: 2 });

    expect(response.status).toBe(200);
    expect(response.body.hotels.length).toBeLessThanOrEqual(2);
    expect(response.body.pagination.page).toBe(1);
    expect(response.body.pagination.limit).toBe(2);
  });

  it("rejects invalid price ranges", async () => {
    const response = await request(app)
      .get("/api/v1/hotels")
      .query({ minPrice: 10000, maxPrice: 100 });

    expect(response.status).toBe(400);
  });

  it("returns hotel details and rooms", async () => {
    const response = await request(app)
      .get(`/api/v1/hotels/${hotelId}`);

    expect(response.status).toBe(200);
    expect(response.body.hotel.id).toBe(hotelId);
    expect(response.body.hotel.rooms.length).toBe(3);
  });

  it("returns 404 for an unknown hotel", async () => {
    const response = await request(app)
      .get("/api/v1/hotels/90000000-0000-4000-8000-000000000099");

    expect(response.status).toBe(404);
  });

  it("returns available rooms for valid future dates", async () => {
    const checkIn = new Date(Date.now() + 7 * 86400000).toISOString();
    const checkOut = new Date(Date.now() + 9 * 86400000).toISOString();

    const response = await request(app)
      .get(`/api/v1/hotels/${hotelId}/rooms`)
      .query({ checkIn, checkOut });

    expect(response.status).toBe(200);
    expect(response.body.count).toBe(3);
    expect(response.body.rooms.length).toBe(3);
  });

  it("rejects missing room availability dates", async () => {
    const response = await request(app)
      .get(`/api/v1/hotels/${hotelId}/rooms`);

    expect(response.status).toBe(400);
  });

  it("rejects checkout before check-in", async () => {
    const checkIn = new Date(Date.now() + 9 * 86400000).toISOString();
    const checkOut = new Date(Date.now() + 7 * 86400000).toISOString();

    const response = await request(app)
      .get(`/api/v1/hotels/${hotelId}/rooms`)
      .query({ checkIn, checkOut });

    expect(response.status).toBe(400);
  });
});

afterAll(async () => {
  try {
    await prisma.user.deleteMany({ where: { email } });
  } finally {
    await prisma.$disconnect();
  }
});
