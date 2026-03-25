import { Router } from "express";
import { getProgress, upsertProgress } from "../controllers/progress.controller";

const router = Router();
router.get("/", getProgress);
router.post("/", upsertProgress);

export default router;
