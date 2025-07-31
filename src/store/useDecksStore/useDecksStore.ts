import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { DecksStoreProps } from "./types";

const useDecksStore = create<DecksStoreProps>()(
  devtools(
    (set) => ({
      playerCardSetName: "",
      botCardSetName: "",
      playerDeck: [],
      botDeck: [],
      actions: {
        setPlayerCardSetName: (newCardSetName) => set({ playerCardSetName: newCardSetName }),
        setBotCardSetName: (newCardSetName) => set({ botCardSetName: newCardSetName }),
        setPlayerDeck: (newCards) => set({ playerDeck: newCards }),
        addCardToPlayerDeck: (newCard) =>
          set((state) => ({ playerDeck: [...state.playerDeck, newCard] })),
        removeCardFromPlayerDeck: (cardId) =>
          set((state) => ({
            playerDeck: state.playerDeck.filter((card) => card._id !== cardId)
          })),
        setBotDeck: (newCards) => set({ botDeck: newCards }),
        addCardToBotDeck: (newCard) => set((state) => ({ botDeck: [...state.botDeck, newCard] })),
        removeCardFromBotDeck: (cardId) =>
          set((state) => ({
            botDeck: state.botDeck.filter((card) => card._id !== cardId)
          }))
      }
    }),
    { name: "DecksStore" }
  )
);

export const usePlayerCardSetName = () => useDecksStore((state) => state.playerCardSetName);
export const useBotCardSetName = () => useDecksStore((state) => state.botCardSetName);
export const usePlayerDeck = () => useDecksStore((state) => state.playerDeck);
export const useBotDeck = () => useDecksStore((state) => state.botDeck);
export const useDecksActions = () => useDecksStore((state) => state.actions);
