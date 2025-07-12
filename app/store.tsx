import { create } from "zustand";

type UserStoreType = {
  email: string;
  setEmail: (email: string) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
}));
