import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { checkTruth } from "../controllers/truth.controller.js";

const router = express.Router();

router.post("/check", authMiddleware, checkTruth);

export default router;
