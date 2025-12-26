import request from "supertest";
import app from "../server.js";

describe("Auth API", () => {
  it("should login and return token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        username: "admin",
        password: "password123"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
