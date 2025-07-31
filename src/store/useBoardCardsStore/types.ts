import { CardProps, CardType } from "src/types";

export type CardRowType = {
  type: CardType;
  cards: CardProps[];
};

type BoardsCardsActionsType = {
  addPlayerBoardCard: (newCard: CardProps) => void;
  addBotBoardCard: (newCard: CardProps) => void;
};

export type BoardCardsStore = {
  playerBoardCards: CardRowType[];
  botBoardCards: CardRowType[];
  actions: BoardsCardsActionsType;
};
