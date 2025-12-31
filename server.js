const express = require("express");
const cors = require("cors");

const app = express();

/* REQUIRED */
app.use(express.json());
app.use(cors());

/* LOGIN API */
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

/* TRUTH CHECK API */
app.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ success: false });
  }

  let verdict = "UNKNOWN";
  let reason = "Not enough information";

  if (text.toLowerCase().includes("earth is round")) {
    verdict = "TRUE";
    reason = "Science confirms Earth is spherical.";
  } else if (text.toLowerCase().includes("earth is flat")) {
    verdict = "FALSE";
    reason = "Flat Earth theory is disproven.";
  }

  res.json({
    success: true,
    verdict,
    reason
  });
});

/* PORT */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
