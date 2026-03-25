import { Response } from "express";
import { Progress } from "../models/Progress.model";
import { AuthRequest } from "../middleware/auth.middleware";

export const getProgress = async (req: AuthRequest, res: Response) => {
  try {
    const entries = await Progress.find({ userId: req.userId });
    const map: Record<string, boolean> = {};
    entries.forEach(e => { map[e.problemId] = e.completed; });
    res.json(map);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const upsertProgress = async (req: AuthRequest, res: Response) => {
  try {
    const { problemId, completed } = req.body;
    const entry = await Progress.findOneAndUpdate(
      { userId: req.userId, problemId },
      { completed, completedAt: completed ? new Date() : undefined },
      { upsert: true, new: true }
    );
    res.json(entry);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
