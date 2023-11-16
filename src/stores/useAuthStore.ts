import { create } from "zustand";

type isLogIn = {
  isLogIn: boolean;
  updateIsLogIn: (state: boolean) => void;
};

const useAuthStore = create<isLogIn>((set, get) => ({
  isLogIn: false,
  updateIsLogIn: (state: boolean) => set({ isLogIn: state }),
}));

export default useAuthStore;
