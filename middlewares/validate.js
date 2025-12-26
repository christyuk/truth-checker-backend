export const validateText = (req, res, next) => {
  const { text } = req.body;

  if (!text || text.length < 5) {
    return res.status(400).json({
      success: false,
      error: { message: "Text must be at least 5 characters" }
    });
  }

  next();
};
