import express from "express";
import authRoutes from "./auth.routes.js";
import truthRoutesV2 from "./v2/truth.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/v2/truth", truthRoutesV2);

export default router;
