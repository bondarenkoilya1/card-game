import { PlayerType, RowProps } from "src/types";

export type BoardProps = {
  boardCards: RowProps[];
  score: number;
  setScore: (newScore: number) => void;
  boardType: PlayerType;
};
