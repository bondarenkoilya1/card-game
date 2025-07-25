import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { DecksStoreProps } from "./types";

export const useDecksStore = create<DecksStoreProps>()(
  devtools(
    (set) => ({
      selectedCardSetName: "",
      setSelectedCardSetName: (newCardSetName) => set({ selectedCardSetName: newCardSetName }),
      playerDeck: [],
      setPlayerDeck: (newCards) => set({ playerDeck: newCards }),
      addCardToPlayerDeck: (newCard) =>
        set((state) => ({ playerDeck: [...state.playerDeck, newCard] })),
      removeCardFromPlayerDeck: (cardId) =>
        set((state) => ({
          playerDeck: state.playerDeck.filter((card) => card._id !== cardId)
        })),
      botDeck: [],
      setBotDeck: (newCards) => set({ botDeck: newCards }),
      addCardToBotDeck: (newCard) => set((state) => ({ botDeck: [...state.botDeck, newCard] })),
      removeCardFromBotDeck: (cardId) =>
        set((state) => ({
          botDeck: state.botDeck.filter((card) => card._id !== cardId)
        }))
    }),
    { name: "DecksStore" }
  )
);
