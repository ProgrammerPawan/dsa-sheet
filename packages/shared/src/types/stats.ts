import type { Difficulty } from "./problem";

/** Per-difficulty solved vs total (e.g. for badges). */
export type DifficultyBreakdown = Record<Difficulty, { solved: number; total: number }>;

export interface SubtopicStats {
  id: string;
  title: string;
  totalProblems: number;
  solvedCount: number;
  percentComplete: number;
  byDifficulty: DifficultyBreakdown;
}

export interface TopicStats {
  id: string;
  title: string;
  description: string;
  totalProblems: number;
  solvedCount: number;
  percentComplete: number;
  byDifficulty: DifficultyBreakdown;
  subtopics: SubtopicStats[];
}

export interface ProgressStatsSummary {
  overall: {
    totalProblems: number;
    solvedCount: number;
    percentComplete: number;
    byDifficulty: DifficultyBreakdown;
  };
  topics: TopicStats[];
}
