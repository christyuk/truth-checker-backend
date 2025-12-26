const express = require("express");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// TEST ROOT
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
