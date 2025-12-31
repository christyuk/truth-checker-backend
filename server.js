const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 LOGIN ROUTE
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // TEMP SIMPLE LOGIN (for learning)
  if (username === "admin" && password === "1234") {
    return res.json({
      success: true,
      token: "dummy-jwt-token"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

// 🔹 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
