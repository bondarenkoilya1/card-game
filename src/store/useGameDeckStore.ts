import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { useGameDeckStoreProps } from "src/types";

export const useGameDeckStore = create<useGameDeckStoreProps>()(
  devtools((set) => ({
    deck: [],
    setDeck: (newCards) => set({ deck: newCards }),
    addCardToDeck: (newCard) => set((state) => ({ deck: [...state.deck, newCard] })),
    removeCardFromDeck: (cardId) =>
      set((state) => ({
        deck: state.deck.filter((card) => card._id !== cardId)
      }))
  }))
);
