import { analyzeTruth } from "../services/truth.service.js";

export const checkTruth = (req, res) => {
  const { text } = req.body;
  const result = analyzeTruth(text);

  res.json({
    success: true,
    version: "v2",
    data: result
  });
};
