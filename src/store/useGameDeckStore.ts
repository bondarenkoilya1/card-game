import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { useGameDeckStoreProps } from "src/types";

export const useGameDeckStore = create<useGameDeckStoreProps>()(
  devtools((set) => ({
    selectedDeck: [],
    setCardsInDeck: (newCards) => set({ selectedDeck: newCards }),
    addCardToDeck: (newCard) =>
      set((state) => ({ selectedDeck: [...state.selectedDeck, newCard] })),
    removeCardFromDeck: (cardId) =>
      set((state) => ({
        selectedDeck: state.selectedDeck.filter((card) => card._id !== cardId)
      }))
  }))
);
