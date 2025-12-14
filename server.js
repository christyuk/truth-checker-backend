import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple truth logic (no DB)
const facts = {
  "earth is flat": false,
  "earth is round": true,
  "sun rises in east": true,
  "humans need oxygen": true
};

// API endpoint
app.post("/api/truth", (req, res) => {
  const { statement } = req.body;

  if (!statement) {
    return res.status(400).json({ error: "Statement is required" });
  }

  const key = statement.toLowerCase().trim();

  if (facts[key] === undefined) {
    return res.json({
      statement,
      result: "Unknown",
      explanation: "No verified data found"
    });
  }

  res.json({
    statement,
    result: facts[key] ? "True" : "False",
    explanation: facts[key]
      ? "Verified factual statement"
      : "This statement is false"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
