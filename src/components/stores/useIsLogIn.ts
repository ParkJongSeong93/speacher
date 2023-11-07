import { create } from "zustand";

type logInState = {
  isLogIn: boolean;
};

type logInAction = {
  updateIsLogIn: (isLogIn: boolean) => void;
};

const useIsLogIn = create<logInState & logInAction>((set, get) => ({
  isLogIn: false,
  updateIsLogIn: (isLogIn) => {
    set({ isLogIn: isLogIn });
  },
}));

export default useIsLogIn;
