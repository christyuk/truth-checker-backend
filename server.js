import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// LOGIN ROUTES
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
