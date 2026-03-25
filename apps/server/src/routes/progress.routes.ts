import { Router } from "express";
import { getProgress, upsertProgress } from "../controllers/progress.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();
router.use(protect);
router.get("/", getProgress);
router.post("/", upsertProgress);

export default router;
