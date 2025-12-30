const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/check", authMiddleware, (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  // ✅ MOCK AI RESPONSE (works locally)
  return res.json({
    claim: text,
    verdict: "True",
    confidence: 0.95,
    explanation:
      "Scientific consensus confirms that the Earth is round (an oblate spheroid).",
  });
});

module.exports = router;
