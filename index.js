import { Router } from "express";
import authRoutes from "./auth.routes.js";
import truthRoutes from "./v2/truth.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/v2/truth", truthRoutes);

export default router;
