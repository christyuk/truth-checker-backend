const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ✅ Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({ token: "demo-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// ✅ Truth check
app.post("/api/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text required" });
  }

  res.json({
    result: "TRUE",
    explanation: "Science confirms Earth is spherical.",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
