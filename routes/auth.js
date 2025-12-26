import express from "express";

const router = express.Router();

// TEMP TEST USER
const USER = {
  username: "test",
  password: "test123",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

export default router;
