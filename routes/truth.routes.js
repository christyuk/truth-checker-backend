const express = require("express");
const router = express.Router();
const { checkTruth } = require("../services/truth.service");

router.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required",
    });
  }

  const result = checkTruth(text);
  res.json(result);
});

module.exports = router;
