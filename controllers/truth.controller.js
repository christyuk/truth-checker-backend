export const checkTruth = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  // Simple demo logic (AI simulation)
  if (text.toLowerCase().includes("earth")) {
    return res.json({
      verdict: "TRUE",
      explanation: "Scientific consensus confirms this claim."
    });
  }

  return res.json({
    verdict: "UNKNOWN",
    explanation: "Insufficient evidence to verify this claim."
  });
};
