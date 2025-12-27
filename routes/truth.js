import express from "express";

const router = express.Router();

router.post("/check", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required"
    });
  }

  let result = "Cannot verify";

  if (text.toLowerCase().includes("earth")) {
    result = "Likely True";
  }

  res.json({
    success: true,
    result
  });
});

export default router;
