const express = require("express");
const cors = require("cors");

const app = express();

// Allow all origins (demo project)
app.use(cors({ origin: "*" }));
app.use(express.json());

// Health check (Render)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ LOGIN API (FIXED)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  // ✅ SAME credentials as frontend demo
  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      token: "demo-token"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

// Truth check API
app.post("/api/check", (req, res) => {
  const { text } = req.body;

  res.json({
    verdict: "Likely TRUE",
    explanation: "Earth is scientifically proven to be round."
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
