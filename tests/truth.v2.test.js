import request from "supertest";
import app from "../server.js";

describe("Truth API", () => {
  it("should verify truth", async () => {
    const res = await request(app)
      .post("/api/v2/truth/check")
      .send({ text: "Earth is round" });

    expect(res.statusCode).toBe(200);
  });
});
