export const analyzeTruth = (text) => {
  if (!text || text.length < 5) {
    return { verdict: "UNKNOWN", confidence: 0.1 };
  }

  return {
    verdict: "TRUE",
    confidence: 0.93
  };
};
