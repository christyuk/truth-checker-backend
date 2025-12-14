import express from "express";
import { checkTruthController } from "../controllers/truth.controller.js";
import { validateCheckRequest } from "../middlewares/validate.js";

const router = express.Router();

router.post("/check", validateCheckRequest, checkTruthController);

export default router;
