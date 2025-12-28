const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// LOGIN (demo – interview safe)
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({ success: true });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// TRUTH CHECK API
app.post("/api/truth/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text required" });
  }

  res.json({
    verdict: "TRUE",
    confidence: 93,
    explanation:
      "Scientific observations and satellite imagery confirm Earth is spherical.",
    sources: ["NASA", "ESA"]
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log("Server running on port", PORT)
);
