import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",

  server: {
    port: process.env.PORT || 3000,
  },

  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },

  logging: {
    level: process.env.LOG_LEVEL || "dev",
  },
};

export default config;
