import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { HandsStoreProps } from "src/types";

export const useHandsStore = create<HandsStoreProps>()(
  devtools((set) => ({
    hand: [],
    setHand: (newCards) => set({ hand: newCards }),
    removeCardFromHand: (cardId) =>
      set((state) => ({
        hand: state.hand.filter((card) => card._id !== cardId)
      }))
  }))
);
