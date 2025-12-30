const { analyzeTruth } = require("../services/ai.service");

exports.checkTruth = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }

    const result = await analyzeTruth(text);

    res.json({
      claim: text,
      verdict: result.verdict,
      confidence: result.confidence,
      explanation: result.explanation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI error" });
  }
};
