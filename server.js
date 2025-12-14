const express = require("express");
const cors = require("cors");

const truthRoutes = require("./routes/truth.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Root */
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

/* Health check */
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

/* API routes */
app.use("/api/v1/truth", truthRoutes);

/* Swagger Docs */
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* Start server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
