import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CardSetStoreProps } from "src/types";

export const useCardSetsStore = create<CardSetStoreProps>()(
  devtools(
    (set) => ({
      cardSets: [],
      selectedCardSetName: "",
      isLoading: false,
      // In case there will be some conflicts It can be created an array with objects for each HTTP method errors
      error: null,
      setCardSets: (newCardSets) => set({ cardSets: newCardSets }),
      setSelectedCardSetName: (newCardSetName) => set({ selectedCardSetName: newCardSetName }),
      setIsLoading: (loadingStatus: boolean) => set({ isLoading: loadingStatus }),
      setError: (errorMessage: string | null) => set({ error: errorMessage })
    }),
    { name: "CardSetsStore" }
  )
);
