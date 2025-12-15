const express = require("express");
const router = express.Router();

router.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  res.json({
    success: true,
    input: text,
    verdict: "TRUE",
    confidence: 0.95,
    explanation: "Rule-based demo logic (no AI, no database)",
  });
});

module.exports = router;
