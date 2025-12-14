const truthService = require("../services/truth.service");

exports.checkTruth = (req, res) => {
  const { text } = req.body;

  const result = truthService.analyze(text);

  res.json({
    success: true,
    input: text,
    verdict: result.verdict,
    confidence: result.confidence,
    explanation: result.explanation,
  });
};


