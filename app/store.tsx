import { create } from "zustand";

type UserStoreType = {
  email: string;
  setEmail: (email: string) => void;
};

type SignUpStoreType = {
  step: number;
  setStep: (step: number) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
}));

export const useSignUpStore = create<SignUpStoreType>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step }),
}));
