const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ---------------- ROOT ----------------
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// ---------------- HEALTH ----------------
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// ---------------- API ----------------
app.post("/api/v1/truth/check", (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      message: "Text is required"
    });
  }

  let verdict = "UNKNOWN";
  let confidence = 0.5;

  if (text.toLowerCase().includes("earth is round")) {
    verdict = "TRUE";
    confidence = 0.95;
  }

  if (text.toLowerCase().includes("earth is flat")) {
    verdict = "FALSE";
    confidence = 0.95;
  }

  res.json({
    success: true,
    input: text,
    verdict,
    confidence,
    explanation: "Rule-based demo logic (no AI, no database)"
  });
});

// ---------------- SWAGGER ----------------
const swaggerPath = path.join(__dirname, "docs", "swagger.yaml");
const swaggerDocument = YAML.load(swaggerPath);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
