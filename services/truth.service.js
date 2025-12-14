export function checkTruth(text) {
  const lower = text.toLowerCase();

  let verdict = "Unknown";
  let explanation = "Not enough information.";
  let confidence = 0.5;

  if (lower.includes("earth") && lower.includes("round")) {
    verdict = "True";
    explanation = "Scientific evidence confirms the Earth is round.";
    confidence = 0.95;
  }

  if (lower.includes("earth") && lower.includes("flat")) {
    verdict = "False";
    explanation = "The flat earth claim is disproven by science.";
    confidence = 0.95;
  }

  return {
    verdict,
    explanation,
    confidence
  };
}
