import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/check", authMiddleware, (req, res) => {
  const { text } = req.body;

  res.json({
    success: true,
    version: "v2",
    data: {
      verdict: "TRUE",
      confidence: 0.93,
    },
  });
});

export default router;
