import express from "express";
import auth from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/check", auth, (req, res) => {
  const { text } = req.body;

  res.json({
    verdict: "TRUE",
    confidence: "93%",
    explanation: "Scientific observations and satellite imagery confirm Earth is spherical.",
    sources: ["NASA", "ESA"]
  });
});

export default router;
