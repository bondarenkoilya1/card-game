import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { HandsStoreProps } from "./types";

const useHandsStore = create<HandsStoreProps>()(
  devtools(
    (set) => ({
      playerHand: [],
      botHand: [],
      actions: {
        setPlayerHand: (newCards) => set({ playerHand: newCards }),
        removeCardFromPlayerHand: (cardId) =>
          set((state) => ({
            playerHand: state.playerHand.filter((card) => card._id !== cardId)
          })),
        setBotHand: (newCards) => set({ botHand: newCards }),
        removeCardFromBotHand: (cardId) =>
          set((state) => ({
            botHand: state.botHand.filter((card) => card._id !== cardId)
          }))
      }
    }),
    { name: "HandsStore" }
  )
);

export const usePlayerHand = () => useHandsStore((state) => state.playerHand);
export const useBotHand = () => useHandsStore((state) => state.botHand);
export const useHandsActions = () => useHandsStore((state) => state.actions);
