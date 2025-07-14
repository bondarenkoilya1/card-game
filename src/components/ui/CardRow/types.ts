import { CardType, Children, CSS } from "src/types";

export type RowType = CardType | "hand" | "deck";

export type CardRowProps = Children & {
  type: RowType;
  outsideStyles?: CSS;
};
