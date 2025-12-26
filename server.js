import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

/* ---------- LOGIN API ---------- */
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // SIMPLE HARDCODED LOGIN (for now)
  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
