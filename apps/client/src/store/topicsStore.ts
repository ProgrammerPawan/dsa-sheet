import { create } from "zustand";
import type { Topic, TopicNavItem } from "@dsa-sheet/shared";
import { fetchTopics as requestTopics } from "../api/topics";
import type { DifficultyFilter } from "../lib/sheetStats";

interface TopicsState {
  nav: TopicNavItem[];
  topics: Topic[];
  lastSearch: string;
  lastDifficulty: DifficultyFilter;
  loading: boolean;
  error: string | null;
  fetchTopics: (search: string, difficulty: DifficultyFilter) => Promise<void>;
  refetchCurrentTopics: () => Promise<void>;
}

export const useTopicsStore = create<TopicsState>((set, get) => ({
  nav: [],
  topics: [],
  lastSearch: "",
  lastDifficulty: "All",
  loading: false,
  error: null,

  fetchTopics: async (search, difficulty) => {
    const trimmed = search.trim();
    set((state) => ({
      lastSearch: trimmed,
      lastDifficulty: difficulty,
      loading: state.topics.length === 0,
      error: null,
    }));
    try {
      const { nav, topics } = await requestTopics({
        search: trimmed,
        difficulty,
      });
      set({ nav, topics, loading: false, error: null });
    } catch {
      set({
        error: "Please check your connection and try again.",
        loading: false,
      });
    }
  },

  refetchCurrentTopics: async () => {
    const { lastSearch, lastDifficulty, fetchTopics: ft } = get();
    await ft(lastSearch, lastDifficulty);
  },
}));
