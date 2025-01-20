import { create } from "zustand";

interface HomeListStore {
  isScrolling: boolean;
  setIsScrolling: (isScrolling: boolean) => void;
}

export const useHomeListStore = create<HomeListStore>()((set) => ({
  isScrolling: false,
  setIsScrolling: (isUserScrolling) =>
    set(() => ({
      isScrolling: isUserScrolling,
    })),
}));
