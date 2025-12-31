const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- LOGIN API ---------------- */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({
      success: true,
      token: "dummy-jwt-token"
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

/* ---------------- TRUTH CHECK API ---------------- */
app.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ success: false });
  }

  let verdict = "UNKNOWN";
  let reason = "Not enough data to verify this claim.";

  if (text.toLowerCase().includes("earth is round")) {
    verdict = "TRUE";
    reason = "Scientific evidence confirms Earth is spherical.";
  } else if (text.toLowerCase().includes("earth is flat")) {
    verdict = "FALSE";
    reason = "Flat Earth theory is scientifically disproven.";
  }

  res.json({
    success: true,
    verdict,
    reason
  });
});

/* ---------------- PORT (VERY IMPORTANT) ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
