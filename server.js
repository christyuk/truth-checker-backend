const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// ✅ Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ LOGIN API (MATCHES FRONTEND DEMO)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  if (username === "test" && password === "test123") {
    return res.json({
      token: "demo-token",
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

// ✅ TRUTH CHECK API
app.post("/api/check", (req, res) => {
  const { text } = req.body;

  res.json({
    verdict: "Likely TRUE",
    explanation: "Earth is scientifically proven to be round.",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
