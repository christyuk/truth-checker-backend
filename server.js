import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import truthRoutes from "./routes/truth.js";

const app = express(); // ✅ MUST come BEFORE app.use

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/v2/truth", truthRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
