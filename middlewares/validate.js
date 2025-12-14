export const validateText = (req, res, next) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      message: "Text is required and must be a string",
    });
  }

  next();
};
