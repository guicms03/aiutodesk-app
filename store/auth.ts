import { create } from "zustand";

type User = {
  nome: string;
  email: string;
};

type AuthState = {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: null,
  user: null,

  login: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
}));
