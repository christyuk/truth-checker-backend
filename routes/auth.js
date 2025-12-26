const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // SIMPLE TEST LOGIN
  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      token: "dummy-jwt-token",
      user: { username }
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
});

module.exports = router;
