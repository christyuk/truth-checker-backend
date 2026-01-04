import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key";

// -------------------- MIDDLEWARE --------------------
app.use(express.json());
app.use(cors()); // ✅ allow Vercel + localhost (safe for demo)

// -------------------- HEALTH CHECK --------------------
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// -------------------- LOGIN ROUTE --------------------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Demo credentials
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({
      success: true,
      message: "Login successful",
      token,
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

// -------------------- AUTH MIDDLEWARE --------------------
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
}

// -------------------- TRUTH CHECK ROUTE --------------------
app.post("/check", authenticateToken, (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({ error: "Claim is required" });
  }

  // Simple demo logic
  const isTrue = claim.toLowerCase().includes("round");

  res.json({
    claim,
    result: isTrue ? "TRUE" : "FALSE",
  });
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
