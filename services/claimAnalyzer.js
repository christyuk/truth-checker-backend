export function analyzeClaim(text) {
  if (text.toLowerCase().includes("earth")) {
    return {
      verdict: "True",
      confidence: 93,
      explanation: "Scientific evidence confirms Earth is spherical.",
      sources: ["NASA", "ESA"]
    };
  }

  return {
    verdict: "Uncertain",
    confidence: 50,
    explanation: "Not enough information.",
    sources: []
  };
}
