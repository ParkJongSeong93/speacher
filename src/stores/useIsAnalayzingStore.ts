import { create } from "zustand";

type isAnalyzing = {
  isAnalyzing: boolean;
  setIsAnalyzing: (state: boolean) => void;
};

const useIsAnalyzingStore = create<isAnalyzing>((set, get) => ({
  isAnalyzing: false,
  setIsAnalyzing : (state: boolean) => set({ isAnalyzing: state }),
}));

export default useIsAnalyzingStore;
