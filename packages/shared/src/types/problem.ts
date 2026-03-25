export type Difficulty = "Easy" | "Medium" | "Hard";

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
}
export interface Topic {
  id: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
}
