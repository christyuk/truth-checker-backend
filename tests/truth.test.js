const request = require("supertest");
const app = require("../server");

describe("Truth Checker API", () => {
  it("should return TRUE for valid scientific statement", async () => {
    const res = await request(app)
      .post("/api/v1/truth/check")
      .send({ text: "The earth is round" });

    expect(res.statusCode).toBe(200);
    expect(res.body.verdict).toBe("TRUE");
  });

  it("should return error for empty input", async () => {
    const res = await request(app)
      .post("/api/v1/truth/check")
      .send({});

    expect(res.statusCode).toBe(400);
  });
});

