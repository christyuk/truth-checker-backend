const express = require("express");
const { checkTruthHandler } = require("../controllers/truth.controller");

const router = express.Router();

router.post("/check", checkTruthHandler);

module.exports = router;
