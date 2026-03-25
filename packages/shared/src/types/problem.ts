export type Difficulty = "Easy" | "Medium" | "Hard";

/** Per-difficulty solved vs total for a topic (sheet API). */
export type TopicRollupByDifficulty = Record<
  Difficulty,
  { solved: number; total: number }
>;

/** Aggregates for one topic (from authenticated GET /api/topics). */
export interface TopicRollup {
  solvedCount: number;
  totalProblems: number;
  percentComplete: number;
  byDifficulty: TopicRollupByDifficulty;
}

/** Aggregates for one subtopic (from authenticated GET /api/topics). */
export interface SubtopicRollup {
  solvedCount: number;
  totalProblems: number;
  percentComplete: number;
}

/** Shortcut row: all topics, unfiltered, with completion counts. */
export interface TopicNavItem {
  id: string;
  title: string;
  solvedCount: number;
  totalProblems: number;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  leetcode?: string;
  youtube?: string;
  article?: string;
}
export interface Subtopic {
  id: string;
  title: string;
  problems: Problem[];
  /** Set by authenticated sheet topics API. */
  rollup?: SubtopicRollup;
}
export interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
  /** Set by authenticated sheet topics API. */
  rollup?: TopicRollup;
}
