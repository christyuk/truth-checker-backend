import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import truthRoutes from "./routes/truth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// API v1
app.use("/api/v1/truth", truthRoutes);

// Health
app.get("/api", (req, res) => {
  res.json({ success: true, message: "API working (no database)" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
