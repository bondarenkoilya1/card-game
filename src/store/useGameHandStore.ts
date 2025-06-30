import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { GameHandStoreProps } from "src/types";

export const useGameHandStore = create<GameHandStoreProps>()(
  devtools((set) => ({
    hand: [],
    setHand: (newCards) => set({ hand: newCards }),
    addCardToHand: (newCard) => set((state) => ({ hand: [...state.hand, newCard] })),
    removeCardFromHand: (cardId) =>
      set((state) => ({
        hand: state.hand.filter((card) => card._id !== cardId)
      }))
  }))
);
