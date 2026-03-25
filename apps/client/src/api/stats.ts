import api from "./axios";
import type { ProgressStatsSummary } from "@dsa-sheet/shared";

export const fetchStatsSummary = (): Promise<ProgressStatsSummary> =>
  api.get("/stats").then((r) => r.data);
