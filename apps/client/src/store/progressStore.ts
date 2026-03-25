import { create } from "zustand";
import type { ProgressMap } from "@dsa-sheet/shared";
import api from "../api/axios";
import { useStatsStore } from "./statsStore";

interface ProgressState {
  progress: ProgressMap;
  loading: boolean;
  fetchProgress: () => Promise<void>;
  toggleProblem: (problemId: string, current: boolean) => Promise<void>;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: {},
  loading: false,

  fetchProgress: async () => {
    set({ loading: true });
    const { data } = await api.get<ProgressMap>("/progress");
    set({ progress: data, loading: false });
  },

  toggleProblem: async (problemId, current) => {
    const prev = get().progress;
    set({ progress: { ...prev, [problemId]: !current } });
    try {
      await api.post("/progress", { problemId, completed: !current });
      void useStatsStore.getState().fetchStats();
    } catch {
      set({ progress: prev });
    }
  },
}));
