// services/ai.service.js
class AIService {
  async analyze(text) {
    // mock logic (replace with real AI later)
    const isTrue = text.toLowerCase().includes("earth");

    return {
      verdict: isTrue ? "TRUE" : "FALSE",
      confidence: isTrue ? 0.93 : 0.45
    };
  }
}

export default new AIService();
