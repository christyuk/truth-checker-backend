const { loginUser } = require("../services/auth.service");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await loginUser(username, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
