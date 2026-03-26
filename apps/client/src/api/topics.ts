import type { Topic, TopicNavItem } from "@dsa-sheet/shared";
import type { DifficultyFilter } from "@/lib/sheetStats";
import api from "./axios";

export interface FetchTopicsParams {
  search?: string;
  difficulty?: DifficultyFilter;
}

export interface TopicsSheetResponse {
  nav: TopicNavItem[];
  topics: Topic[];
}

export function fetchTopics(params?: FetchTopicsParams): Promise<TopicsSheetResponse> {
  const sp = new URLSearchParams();
  if (params?.search?.trim()) {
    sp.set("search", params.search.trim());
  }
  if (params?.difficulty && params.difficulty !== "All") {
    sp.set("difficulty", params.difficulty);
  }
  const qs = sp.toString();
  return api.get(qs ? `/topics?${qs}` : "/topics").then((r) => r.data);
}
