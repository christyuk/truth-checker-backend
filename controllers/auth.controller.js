import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { username, password } = req.body;

  // ✅ hardcoded test credentials
  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
