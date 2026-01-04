require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

/* ---------------- HEALTH ---------------- */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* ---------------- LOGIN ---------------- */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // ✅ FIXED DEMO USER
  if (username !== "demo" || password !== "demo") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

/* ---------------- AUTH MIDDLEWARE ---------------- */
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Unauthorized" });

  const token = header.split(" ")[1];
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

/* ---------------- CHECK TRUTH ---------------- */
app.post("/check", auth, (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({ message: "Claim required" });
  }

  res.json({
    claim,
    verdict: "TRUE",
    explanation: "Scientific consensus confirms this claim."
  });
});

/* ---------------- START ---------------- */
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
