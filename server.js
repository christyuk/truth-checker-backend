const express = require("express");
const cors = require("cors");

const truthRoutes = require("./routes/truth.routes");

// ✅ CORRECT PATH (this fixes your crash)
const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// Health check (Render friendly)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// API routes
app.use("/api/v1/truth", truthRoutes);

// Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
