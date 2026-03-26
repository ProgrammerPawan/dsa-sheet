export interface ProgressEntry {
  userId: string;
  problemId: string;
  completed: boolean;
  completedAt?: string;
}
export type ProgressMap = Record<string, boolean>;
