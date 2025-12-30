import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running");
});

app.post("/api/truth/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  res.json({
    verdict: true,
    confidence: 0.95,
    explanation:
      "Scientific consensus confirms that the Earth is round (an oblate spheroid)."
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
