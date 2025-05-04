import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CardSetStoreProps } from "src/types";

export const useCardSetsStore = create<CardSetStoreProps>()(
  devtools((set) => ({
    cardSets: [],
    isLoading: false,
    error: null,
    setIsLoading: (loadingStatus: boolean) => set({ isLoading: loadingStatus }),
    setError: (errorMessage: string | null) => set({ error: errorMessage }),
    setCardSets: (newCardSets) => set({ cardSets: newCardSets })
  }))
);
