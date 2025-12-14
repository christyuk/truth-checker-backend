module.exports.checkTruth = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("earth") && lower.includes("round")) {
    return {
      success: true,
      input: text,
      verdict: "TRUE",
      confidence: 0.95,
      explanation: "Rule-based demo logic (no AI, no database)"
    };
  }

  return {
    success: true,
    input: text,
    verdict: "UNKNOWN",
    confidence: 0.5,
    explanation: "Not enough information"
  };
};
