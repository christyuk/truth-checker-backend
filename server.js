const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/* ✅ HEALTH CHECK */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* ✅ DEMO LOGIN */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "demo" && password === "demo") {
    return res.json({
      token: "demo-token",
      user: { username: "demo" }
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

/* ✅ PROTECTED API */
app.post("/check", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth || auth !== "Bearer demo-token") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { claim } = req.body;

  res.json({
    claim,
    result: "This claim appears to be factually correct (demo response)."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
