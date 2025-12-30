import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

// Truth check API
app.post("/api/truth/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "Text is required",
    });
  }

  res.json({
    verdict: true,
    confidence: 0.95,
    explanation:
      "Scientific consensus confirms that the Earth is round (an oblate spheroid).",
  });
});

// Start server (ONLY ONCE)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
