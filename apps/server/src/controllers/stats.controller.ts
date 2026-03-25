import { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware";
import { getProgressStatsSummaryForUser } from "../services/progressStats.service";

export const getStats = async (req: AuthRequest, res: Response) => {
  const summary = await getProgressStatsSummaryForUser(req.userId!);
  res.json(summary);
};
