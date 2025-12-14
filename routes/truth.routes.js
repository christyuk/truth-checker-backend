const express = require("express");
const { checkTruth } = require("../controllers/truth.controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// POST /api/v1/truth/check
router.post("/check", validate, checkTruth);

module.exports = router;
