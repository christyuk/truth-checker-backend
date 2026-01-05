const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      token: "demo-token"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

app.post("/api/check", (req, res) => {
  const { text } = req.body;

  res.json({
    verdict: "Likely TRUE",
    explanation: "Earth is scientifically proven to be round."
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Backend running on port", PORT);
});
