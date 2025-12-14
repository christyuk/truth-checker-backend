const { checkTruth } = require("../services/truth.service");

exports.checkTruthHandler = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required"
    });
  }

  const result = checkTruth(text);

  res.json({
    success: true,
    input: text,
    ...result
  });
};


