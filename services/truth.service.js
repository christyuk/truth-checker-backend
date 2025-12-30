const { analyzeClaim } = require("./ai.service");

async function checkTruth(text) {
  const result = await analyzeClaim(text);

  return {
    claim: text,
    verdict: result.verdict,
    confidence: result.confidence,
    explanation: result.explanation
  };
}

module.exports = { checkTruth };
