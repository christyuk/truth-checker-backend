exports.analyze = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("earth is round")) {
    return {
      verdict: "TRUE",
      confidence: 0.95,
      explanation: "Rule-based demo logic (no AI, no database)",
    };
  }

  return {
    verdict: "UNKNOWN",
    confidence: 0.5,
    explanation: "Statement not found in rule set",
  };
};
