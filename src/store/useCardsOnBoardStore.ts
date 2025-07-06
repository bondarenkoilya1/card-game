import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CARD_TYPES } from "src/constants";

import { CardProps, CardRowType, CardsOnBoardStore } from "src/types";

const createEmptyBoard = (): CardRowType[] => CARD_TYPES.map((type) => ({ type, cards: [] }));

const updateBoardRow = (board: CardRowType[], newCard: CardProps): CardRowType[] =>
  board.map((row) =>
    row.type === newCard.type ? { ...row, cards: [...row.cards, newCard] } : row
  );

export const useCardsOnBoardStore = create<CardsOnBoardStore>()(
  devtools((set) => ({
    playerBoardCards: createEmptyBoard(),
    addPlayerBoardCard: (newCard) =>
      set((state) => ({
        playerBoardCards: updateBoardRow(state.playerBoardCards, newCard)
      })),
    botBoardCards: createEmptyBoard(),
    addBotBoardCard: (newCard) =>
      set((state) => ({
        botBoardCards: updateBoardRow(state.botBoardCards, newCard)
      }))
  }))
);
