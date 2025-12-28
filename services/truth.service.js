async function checkTruth(text) {
  if (!text || text.trim() === "") {
    return {
      verdict: "UNKNOWN",
      explanation: "No claim provided"
    };
  }

  if (text.toLowerCase().includes("earth")) {
    return {
      verdict: "TRUE",
      explanation: "The Earth is scientifically proven to be round."
    };
  }

  return {
    verdict: "UNKNOWN",
    explanation: "This claim cannot be verified with available data."
  };
}

module.exports = { checkTruth };
