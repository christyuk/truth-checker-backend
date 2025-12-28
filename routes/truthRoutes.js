const express = require("express");
const router = express.Router();

router.post("/check", (req, res) => {
  const { text } = req.body;

  if (text && text.toLowerCase().includes("earth")) {
    return res.json({
      verdict: "TRUE",
      explanation: "The Earth is scientifically proven to be round."
    });
  }

  res.json({
    verdict: "UNKNOWN",
    explanation: "Cannot verify this claim."
  });
});

module.exports = router;
