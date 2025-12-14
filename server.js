import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import truthRoutes from "./routes/truth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Truth Checker Backend is running 🚀"
  });
});

// ✅ API base route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API working (no database required)"
  });
});

// ✅ Feature routes
app.use("/api", truthRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

