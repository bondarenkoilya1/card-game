import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CardSetStoreProps } from "src/types";

export const useCardSetsStore = create<CardSetStoreProps>()(
  devtools((set) => ({
    cardSets: [],
    setCardSets: (newCardSets) => set({ cardSets: newCardSets })
  }))
);
