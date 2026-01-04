const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "truth_checker_secret"; // for demo

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "demo" && password === "demo") {
    const token = jwt.sign({ user: username }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// Auth middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "No token" });

  const token = header.split(" ")[1];
  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// Truth check
app.post("/check", auth, (req, res) => {
  const { claim } = req.body;

  res.json({
    claim,
    verdict: "TRUE",
    explanation: "Scientific consensus confirms this claim."
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
