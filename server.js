import express from "express";
import cors from "cors";

import truthRoutes from "./routes/truth.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root health check (VERY IMPORTANT for cloud)
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// API health
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API working (no database)",
  });
});

// Versioned API (BIG TECH STANDARD)
app.use("/api/v1/truth", truthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
