import { checkTruth } from "../services/truth.service.js";

export function checkTruthController(req, res) {
  const { text } = req.body;

  const result = checkTruth(text);

  res.json({
    success: true,
    input: text,
    ...result
  });
}


