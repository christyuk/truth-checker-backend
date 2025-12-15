const express = require("express");
const cors = require("cors");

const truthRoutes = require("./routes/truth.routes");

// ✅ Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.json());

// ---------- ROOT ----------
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// ---------- HEALTH CHECK ----------
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ---------- API ROUTES ----------
app.use("/api/v1/truth", truthRoutes);

// ---------- SWAGGER ----------
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ---------- START SERVER ----------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

