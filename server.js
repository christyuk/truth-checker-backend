require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

/* ======================
   HEALTH CHECK (FIXED)
====================== */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* ======================
   LOGIN
====================== */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "demo" && password === "demo123") {
    const token = jwt.sign(
      { user: username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

/* ======================
   AUTH MIDDLEWARE
====================== */
function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
}

/* ======================
   TRUTH CHECK (PROTECTED)
====================== */
app.post("/check", auth, (req, res) => {
  const { claim } = req.body;

  res.json({
    claim,
    verdict: "Likely True",
    confidence: "0.78"
  });
});

/* ======================
   START SERVER
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
