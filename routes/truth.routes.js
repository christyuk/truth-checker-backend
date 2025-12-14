import express from "express";
import { checkTruth } from "../controllers/truth.controller.js";
import { validateText } from "../middlewares/validate.js";

const router = express.Router();

router.post("/check", validateText, checkTruth);

export default router;
