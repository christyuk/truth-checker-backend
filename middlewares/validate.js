export function validateCheckRequest(req, res, next) {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      error: "Text is required and must be a string"
    });
  }

  if (text.length < 5) {
    return res.status(400).json({
      success: false,
      error: "Text must be at least 5 characters long"
    });
  }

  next();
}
