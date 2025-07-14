import { PlayerType } from "src/types";

import { CardProps, CardType } from "./ui/Card";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type BoardProps = {
  boardCards: RowProps[];
  score: number;
  setScore: (newScore: number) => void;
  boardType: PlayerType;
};
