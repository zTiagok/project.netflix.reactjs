import { create } from "zustand";

type UserStoreType = {
  email: string;
};

export const useUserStore = create<UserStoreType>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
}));
