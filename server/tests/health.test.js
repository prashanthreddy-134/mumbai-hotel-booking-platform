import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("Health API", () => {
  it("GET /health returns the real application health response", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("mumbai-hotel-api");
    expect(response.body.time).toBeTruthy();
  });
});
