import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // ✅ DEMO MODE (NO LOGIN REQUIRED)
  if (req.headers["x-demo"] === "true") {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
