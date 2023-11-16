import { create } from "zustand";

type id = {
  id: number | null;
  setId: (id: number) => void;
};

const useCurrentVideoIdStore = create<id>((set, get) => ({
  id: null,
  setId: (id: number) => set({ id }),
}));

export default useCurrentVideoIdStore;
