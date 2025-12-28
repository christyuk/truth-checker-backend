const jwt = require("jsonwebtoken");

const loginUser = async (username, password) => {
  console.log("LOGIN ATTEMPT:", username, password);

  if (username === "test" && password === "test") {
    const token = jwt.sign({ username }, "secretkey", {
      expiresIn: "1h"
    });

    return { token };
  }

  throw new Error("Invalid credentials");
};

module.exports = { loginUser };
