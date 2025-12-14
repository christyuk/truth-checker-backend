export const checkTruth = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Text is required"
    });
  }

  // Demo logic (Big Tech cares about logic first)
  const response = {
    success: true,
    input: text,
    result: "This is a demo response (no database used)"
  };

  res.json(response);
};

