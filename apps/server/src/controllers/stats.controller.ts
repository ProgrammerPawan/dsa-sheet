import { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware";
import { getProgressStatsSummaryForUser } from "../services/progressStats.service";

export const getStats = async (req: AuthRequest, res: Response) => {
  try {
    const summary = await getProgressStatsSummaryForUser(req.userId!);
    res.json(summary);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
