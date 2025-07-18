import { CardProps, CardType } from "src/types";

export type CardRowType = {
  type: CardType;
  cards: CardProps[];
};

export type BoardCardsStore = {
  playerBoardCards: CardRowType[];
  addPlayerBoardCard: (newCard: CardProps) => void;
  botBoardCards: CardRowType[];
  addBotBoardCard: (newCard: CardProps) => void;
};
