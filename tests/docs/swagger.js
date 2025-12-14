module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Truth Checker API",
    version: "1.0.0",
    description: "API documentation for Truth Checker Backend"
  },
  servers: [
    {
      url: "https://truth-checker-backend.onrender.com"
    }
  ],
  paths: {
    "/api/v1/truth/check": {
      post: {
        summary: "Check truth of a statement",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  text: {
                    type: "string",
                    example: "The earth is round"
                  }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: "Truth check result"
          }
        }
      }
    }
  }
};
