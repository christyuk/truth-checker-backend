const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* TEST ROOT */
app.get("/", (req, res) => {
  res.send("Truth Checker Backend is running ✅");
});

/* LOGIN API */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // HARD-CODED TEST USER (for now)
  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      token: "fake-jwt-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

/* TRUTH API (protected example) */
app.post("/truth", (req, res) => {
  res.json({
    result: "This looks true ✅",
  });
});

app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
