const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const truthRoutes = require("./routes/truth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Load swagger yaml
const swaggerDocument = YAML.load(
  path.join(__dirname, "docs", "swagger.yaml")
);

// Middlewares
app.use(cors());
app.use(express.json());

// Root health check
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// API health
app.get("/api", (req, res) => {
  res.json({ success: true, message: "API working (no database)" });
});

// Swagger Docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.use("/api/v1/truth", truthRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
