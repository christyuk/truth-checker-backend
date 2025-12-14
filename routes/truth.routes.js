const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const truthService = require("../services/truth.service");

router.post("/check", validate, (req, res) => {
  const { text } = req.body;
  const result = truthService.checkTruth(text);
  res.json(result);
});

module.exports = router;
