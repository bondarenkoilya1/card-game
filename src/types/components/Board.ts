import { CSS } from "src/types";

import { CardProps, CardType } from "./ui/Card.ts";

type Boards = "player" | "bot";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type CardsOnBoardArray = {
  cardsOnBoard: RowProps[];
  score: number;
  setScore: (newScore: number) => void;
  type: Boards;
};

export type CardsOnBoardUpdater = {
  outsideStyles?: CSS;
};
