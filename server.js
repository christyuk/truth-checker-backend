const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "demo_secret_key";

/* =========================
   HEALTH CHECK
========================= */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is healthy" });
});

/* =========================
   DEMO USER (TEMP)
========================= */
const DEMO_USER = {
  username: "demo",
  password: "demo123",
};

/* =========================
   LOGIN
========================= */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === DEMO_USER.username &&
    password === DEMO_USER.password
  ) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

/* =========================
   PROTECTED ROUTE
========================= */
app.post("/check", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    jwt.verify(authHeader.split(" ")[1], JWT_SECRET);
    res.json({
      result: "TRUE",
      explanation: "Science confirms Earth is spherical.",
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
