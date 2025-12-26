import { analyzeTruth } from "../services/truth.service.js";

export function checkTruth(req, res) {
  const { text } = req.body;

  const result = analyzeTruth(text);

  res.json({
    success: true,
    data: result
  });
}
