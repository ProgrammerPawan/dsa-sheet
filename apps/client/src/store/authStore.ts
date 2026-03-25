import { create } from "zustand";
import type { User, LoginCredentials, RegisterCredentials } from "@dsa-sheet/shared";
import api from "../api/axios";

interface AuthState {
  user: User | null;
  token: string | null;
  login: (creds: LoginCredentials) => Promise<void>;
  register: (creds: RegisterCredentials) => Promise<void>;
  logout: () => void;
  hydrate: () => void;
}

function readAuthFromStorage(): { user: User | null; token: string | null } {
  if (typeof window === "undefined") return { user: null, token: null };
  try {
    const token = localStorage.getItem("token");
    const raw = localStorage.getItem("user");
    if (token && raw) {
      return { token, user: JSON.parse(raw) as User };
    }
  } catch {
    /* ignore corrupt storage */
  }
  return { user: null, token: null };
}

export const useAuthStore = create<AuthState>((set) => ({
  ...readAuthFromStorage(),

  hydrate: () => {
    set(readAuthFromStorage());
  },

  login: async (creds) => {
    const { data } = await api.post("/auth/login", creds);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    set({ token: data.token, user: data.user });
  },

  register: async (creds) => {
    const { data } = await api.post("/auth/register", creds);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    set({ token: data.token, user: data.user });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));
