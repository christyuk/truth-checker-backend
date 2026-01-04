const express = require("express");
const cors = require("cors");

const app = express();

/* -------------------- MIDDLEWARE -------------------- */
app.use(express.json());

app.use(
  cors({
    origin: "*", // allow Vercel frontend
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* -------------------- HEALTH CHECK -------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* -------------------- LOGIN (DEMO) -------------------- */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({
      success: true,
      token: "dummy-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

/* -------------------- TRUTH CHECK -------------------- */
app.post("/check", (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({ error: "No claim provided" });
  }

  // Simple demo logic
  const trueStatements = [
    "earth is round",
    "the earth is round",
    "sun rises in the east",
  ];

  const result = trueStatements.includes(claim.toLowerCase())
    ? "TRUE"
    : "FALSE";

  res.json({ result });
});

/* -------------------- START SERVER -------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
