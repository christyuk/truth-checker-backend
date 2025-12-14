const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Truth Checker API",
      version: "1.0.0",
      description: "API documentation for Truth Checker"
    },
    servers: [
      {
        url: "https://truth-checker-backend.onrender.com"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);
