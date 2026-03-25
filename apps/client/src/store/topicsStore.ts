import { create } from "zustand";
import type { Topic } from "@dsa-sheet/shared";
import { fetchTopics } from "../api/topics";

interface TopicsState {
  topics: Topic[];
  loading: boolean;
  error: string | null;
  fetchTopics: () => Promise<void>;
}

export const useTopicsStore = create<TopicsState>((set) => ({
  topics: [],
  loading: false,
  error: null,
  fetchTopics: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchTopics();
      set({ topics: data, loading: false });
    } catch {
      set({ error: "Please check your connection and try again.", loading: false });
    }
  },
}));
