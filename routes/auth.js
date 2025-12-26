const express = require("express");
const router = express.Router();

// TEMP hardcoded user (for testing)
const USER = {
  username: "test",
  password: "test123",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === USER.username &&
    password === USER.password
  ) {
    return res.json({
      success: true,
      message: "Login successful",
      token: "dummy-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password",
  });
});

module.exports = router;
