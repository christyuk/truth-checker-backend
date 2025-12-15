const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Truth Checker API",
      version: "1.0.0",
      description: "API documentation for Truth Checker backend",
    },
    servers: [
      {
        url: "https://truth-checker-backend.onrender.com",
      },
    ],
    paths: {
      "/api/v1/truth/check": {
        post: {
          summary: "Check truth of a statement",
          description: "Returns whether the given statement is true or false",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    text: {
                      type: "string",
                      example: "The earth is round",
                    },
                  },
                  required: ["text"],
                },
              },
            },
          },
          responses: {
            200: {
              description: "Truth check result",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean" },
                      verdict: { type: "string" },
                      confidence: { type: "number" },
                      explanation: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [], // we are defining paths manually
};

module.exports = swaggerJsdoc(options);
