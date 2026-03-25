import api from "./axios";
import type { Topic } from "@dsa-sheet/shared";

export const fetchTopics = (): Promise<Topic[]> => api.get("/topics").then((r) => r.data);
