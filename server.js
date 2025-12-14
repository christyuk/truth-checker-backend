const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const truthRoutes = require("./routes/truth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* ROOT */
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

/* HEALTH CHECK (RENDER NEEDS THIS) */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* API ROUTES */
app.use("/api/v1/truth", truthRoutes);

/* SWAGGER */
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
