import express from "express";
import { checkTruth } from "../controllers/truth.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API working without MongoDB"
  });
});

router.post("/check", checkTruth);

export default router;
