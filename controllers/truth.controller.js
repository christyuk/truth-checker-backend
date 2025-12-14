import { analyzeTruth } from "../services/truth.service.js";

export const checkTruth = async (req, res) => {
  try {
    const { text } = req.body;

    const result = analyzeTruth(text);

    res.status(200).json({
      success: true,
      input: text,
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


