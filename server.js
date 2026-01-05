const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "test" && password === "test123") {
    return res.json({ token: "demo-token" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN ATTEMPT:", username, password);

  if (username === "test" && password === "test123") {
    return res.json({
      token: "demo-token",
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});
