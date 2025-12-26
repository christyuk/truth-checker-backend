import { validateUser } from "../services/auth.service.js";
import { generateToken } from "../utils/token.js";

export function login(req, res) {
  const { username, password } = req.body;

  const user = validateUser(username, password);

  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  const token = generateToken(user);

  res.json({ token });
}
