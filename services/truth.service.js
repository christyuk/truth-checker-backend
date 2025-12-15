function checkTruth(text) {
  const lower = text.toLowerCase();

  let verdict = "UNKNOWN";
  let confidence = 0.5;

  if (lower.includes("earth") && lower.includes("round")) {
    verdict = "TRUE";
    confidence = 0.95;
  }

  if (lower.includes("earth") && lower.includes("flat")) {
    verdict = "FALSE";
    confidence = 0.95;
  }

  return {
    success: true,
    input: text,
    verdict,
    confidence,
    explanation: "Rule-based demo logic (no AI, no database)",
  };
}

module.exports = { checkTruth };
