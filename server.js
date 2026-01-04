const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

/* ===== CORS (VERY IMPORTANT) ===== */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://frontend-six-sable-30.vercel.app"
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

/* ===== HEALTH CHECK ===== */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* ===== LOGIN (DEMO) ===== */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({
      success: true,
      token: "dummy-token-123",
    });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

/* ===== TRUTH CHECK ===== */
app.post("/check", (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({ error: "No claim provided" });
  }

  // Simple demo logic
  if (claim.toLowerCase().includes("earth")) {
    return res.json({ result: "TRUE" });
  }

  res.json({ result: "UNKNOWN" });
});

/* ===== START SERVER ===== */
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
