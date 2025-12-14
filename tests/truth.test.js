import request from "supertest";
import app from "../server.js";

describe("Truth Check API", () => {
  it("should validate input text", async () => {
    const res = await request(app)
      .post("/api/v1/truth/check")
      .send({});

    expect(res.statusCode).toBe(400);
  });

  it("should return verdict for valid input", async () => {
    const res = await request(app)
      .post("/api/v1/truth/check")
      .send({ text: "The earth is round" });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
