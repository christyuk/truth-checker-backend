export function validateUser(username, password) {
  // demo login (hardcoded)
  if (username === "admin" && password === "password123") {
    return { id: 1, username: "admin" };
  }
  return null;
}
