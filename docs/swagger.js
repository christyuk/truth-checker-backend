import swaggerUi from "swagger-ui-express";

export const setupSwagger = (app) => {
  const spec = {
    openapi: "3.0.0",
    info: {
      title: "Truth Checker API",
      version: "1.0.0"
    },
    paths: {}
  };

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(spec));
};
