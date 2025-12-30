import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* LOGIN */
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "testuser" && password === "123456") {
    return res.json({
      success: true,
      token: "mock-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

/* TRUTH CHECK */
app.post("/api/truth/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  res.json({
    verdict: true,
    confidence: 0.95,
    explanation:
      "Scientific consensus confirms that the Earth is round (an oblate spheroid).",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
