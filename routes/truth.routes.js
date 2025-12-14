const express = require("express");
const { checkTruth } = require("../services/truth.service");

const router = express.Router();

/**
 * @swagger
 * /api/v1/truth/check:
 *   post:
 *     summary: Check if a statement is true or false
 *     tags: [Truth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Truth check result
 */
router.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const result = checkTruth(text);
  res.json(result);
});

module.exports = router;
