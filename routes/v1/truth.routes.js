import express from "express";
import { checkTruthV1 } from "../../controllers/truth.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/truth/check", authenticate, checkTruthV1);

export default router;
