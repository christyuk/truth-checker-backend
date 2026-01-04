const express = require("express");
const cors = require("cors");

const app = express();

/* ------------------ MIDDLEWARE ------------------ */
app.use(cors());
app.use(express.json());

// IMPORTANT: allow preflight requests
app.options("*", cors());

/* ------------------ HEALTH CHECK ------------------ */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* ------------------ PUBLIC CHECK API ------------------ */
app.post("/check", (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({
      error: "Claim is required"
    });
  }

  const lower = claim.toLowerCase();

  if (lower.includes("earth is round")) {
    return res.json({
      verdict: "TRUE",
      explanation: "Scientific consensus confirms this claim."
    });
  }

  return res.json({
    verdict: "UNCERTAIN",
    explanation: "Insufficient reliable evidence to verify this claim."
  });
});

/* ------------------ START SERVER ------------------ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
