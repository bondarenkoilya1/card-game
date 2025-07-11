import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { HandsStoreProps } from "src/types";

export const useHandsStore = create<HandsStoreProps>()(
  devtools(
    (set) => ({
      playerHand: [],
      setPlayerHand: (newCards) => set({ playerHand: newCards }),
      removeCardFromPlayerHand: (cardId) =>
        set((state) => ({
          playerHand: state.playerHand.filter((card) => card._id !== cardId)
        })),
      botHand: [],
      setBotHand: (newCards) => set({ botHand: newCards }),
      removeCardFromBotHand: (cardId) =>
        set((state) => ({
          botHand: state.botHand.filter((card) => card._id !== cardId)
        }))
    }),
    { name: "HandsStore" }
  )
);
