import { create } from "zustand";
import type { ProgressStatsSummary } from "@dsa-sheet/shared";
import { fetchStatsSummary } from "../api/stats";

interface StatsState {
  summary: ProgressStatsSummary | null;
  loading: boolean;
  error: string | null;
  fetchStats: () => Promise<void>;
}

export const useStatsStore = create<StatsState>((set) => ({
  summary: null,
  loading: false,
  error: null,

  fetchStats: async () => {
    set({ loading: true, error: null });
    try {
      const summary = await fetchStatsSummary();
      set({ summary, loading: false });
    } catch {
      set({ error: "Please check your connection and try again.", loading: false });
    }
  },
}));
