const express = require("express");
const router = express.Router();

/**
 * POST /api/auth/login
 * body: { username, password }
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // TEMP demo login (replace later with DB)
  if (username === "test" && password === "test123") {
    return res.json({
      success: true,
      user: {
        username: "test"
      }
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

module.exports = router;
