module.exports = (req, res, next) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid input. 'text' is required."
    });
  }

  next();
};
