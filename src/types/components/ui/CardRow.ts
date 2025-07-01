import { Children, CSS } from "src/types";

import { CardType } from "./Card";

export type RowType = CardType | "hand" | "deck";

export type CardRowProps = Children & {
  type: RowType;
  outsideStyles?: CSS;
};
