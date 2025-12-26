const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      message: "Login successful",
      token: "dummy-token",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

module.exports = router;
