import request from "supertest";
import app from "../server.js";

describe("Truth API", () => {
  it("should return verdict and confidence", async () => {
    const res = await request(app)
      .post("/api/v2/truth/check")
      .set("Authorization", "Bearer TEST_TOKEN")
      .send({ text: "Earth is round" });

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty("verdict");
    expect(res.body.data).toHaveProperty("confidence");
  });
});
