import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CARD_TYPES } from "src/constants";

import { CardProps, RowProps } from "src/types";
import { BoardCardsStore } from "./types";

const createEmptyBoard = (): RowProps[] => CARD_TYPES.map((type) => ({ type, cards: [] }));

const updateBoardRow = (board: RowProps[], newCard: CardProps): RowProps[] =>
  board.map((row) =>
    row.type === newCard.type ? { ...row, cards: [...row.cards, newCard] } : row
  );

export const useBoardCardsStore = create<BoardCardsStore>()(
  devtools(
    (set) => ({
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
    }),
    { name: "BoardCardsStore" }
  )
);
