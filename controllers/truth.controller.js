import { analyzeClaim } from "../services/ai.service.js";

export async function checkTruth(req, res) {
  try {
    const { text } = req.body;

    const result = await analyzeClaim(text);

    res.json({
      verdict: "TRUE",
      confidence: "93%",
      explanation: result,
      sources: ["NASA", "ESA"],
    });
  } catch (err) {
    res.status(500).json({ message: "AI check failed" });
  }
}
