function checkTruth(text) {
  const lower = text.toLowerCase();

  let verdict = "UNKNOWN";
  let confidence = 0.5;

  if (lower.includes("earth is round")) {
    verdict = "TRUE";
    confidence = 0.95;
  } else if (lower.includes("earth is flat")) {
    verdict = "FALSE";
    confidence = 0.95;
  }

  return {
    verdict,
    confidence,
    explanation: "Rule-based demo logic (no AI, no database)"
  };
}

module.exports = { checkTruth };
