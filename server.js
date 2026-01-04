const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "demo_secret_key";

/**
 * HEALTH CHECK
 */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/**
 * LOGIN (DEMO)
 */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // demo credentials
  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

/**
 * AUTH MIDDLEWARE
 */
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.sendStatus(401);

  const token = header.split(" ")[1];

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}

/**
 * TRUTH CHECK
 */
app.post("/check", auth, (req, res) => {
  const { text } = req.body;

  const isTrue =
    text.toLowerCase().includes("earth") &&
    text.toLowerCase().includes("round");

  res.json({ result: isTrue ? "TRUE" : "FALSE" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
