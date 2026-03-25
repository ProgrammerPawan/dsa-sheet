import api from "./axios";
import type { ProgressMap } from "@dsa-sheet/shared";

export const fetchProgress = (): Promise<ProgressMap> => api.get("/progress").then((r) => r.data);

export const upsertProgress = (problemId: string, completed: boolean) =>
  api.post("/progress", { problemId, completed });
