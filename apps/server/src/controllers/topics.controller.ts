import type { Difficulty, Topic } from "@dsa-sheet/shared";
import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { Progress } from "../models/Progress.model";
import { TopicModel } from "../models/Topic.model";
import {
  attachRollupsToTopics,
  buildTopicNavItems,
} from "../services/topicRollup.service";
import {
  filterTopicsBySearchAndDifficulty,
  type DifficultyFilter,
} from "../services/topicsQuery.service";

const DIFFICULTY_VALUES: Difficulty[] = ["Easy", "Medium", "Hard"];

function parseDifficulty(raw: unknown): DifficultyFilter {
  if (raw === undefined || raw === null || raw === "" || raw === "All") {
    return "All";
  }
  if (typeof raw === "string" && DIFFICULTY_VALUES.includes(raw as Difficulty)) {
    return raw as Difficulty;
  }
  return "All";
}

async function completedProblemIdsForUser(userId: string | undefined): Promise<Set<string>> {
  if (!userId) return new Set();
  const progressDocs = await Progress.find({ userId, completed: true }).lean();
  return new Set(
    progressDocs.map((d) => d.problemId).filter((id): id is string => Boolean(id)),
  );
}

export const getTopics = async (req: AuthRequest, res: Response) => {
  const raw = await TopicModel.find().lean();
  const allTopics = raw as unknown as Topic[];

  const completed = await completedProblemIdsForUser(req.userId);
  const nav = buildTopicNavItems(allTopics, completed);

  const search = typeof req.query.search === "string" ? req.query.search : "";
  const difficulty = parseDifficulty(req.query.difficulty);
  const filtered = filterTopicsBySearchAndDifficulty(allTopics, search, difficulty);
  const topics = attachRollupsToTopics(filtered, completed);

  res.json({ nav, topics });
};
