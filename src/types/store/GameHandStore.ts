import { CardProps } from "src/types";

export type GameHandStoreProps = {
  hand: CardProps[];
  setHand: (cards: CardProps[]) => void;
  removeCardFromHand: (cardId: string) => void;
};
