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

const useBoardCardsStore = create<BoardCardsStore>()(
  devtools(
    (set) => ({
      playerBoardCards: createEmptyBoard(),
      botBoardCards: createEmptyBoard(),
      actions: {
        addPlayerBoardCard: (newCard) =>
          set((state) => ({
            playerBoardCards: updateBoardRow(state.playerBoardCards, newCard)
          })),
        addBotBoardCard: (newCard) =>
          set((state) => ({
            botBoardCards: updateBoardRow(state.botBoardCards, newCard)
          }))
      }
    }),
    { name: "BoardCardsStore" }
  )
);

export const usePlayerBoardCards = () => useBoardCardsStore((state) => state.playerBoardCards);
export const useBotBoardCards = () => useBoardCardsStore((state) => state.botBoardCards);
export const useBoardCardsActions = () => useBoardCardsStore((state) => state.actions);
