import { Router } from "express";
import { getTopics } from "../controllers/topics.controller";

const router = Router();
router.get("/", getTopics);

export default router;
