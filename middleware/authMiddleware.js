module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  // ✅ ALLOW DEMO TOKEN
  if (token === "demo-jwt-token") {
    req.user = { id: "demo-user" };
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};
