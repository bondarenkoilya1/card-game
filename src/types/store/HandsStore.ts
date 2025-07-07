import { CardProps } from "src/types";

export type HandsStoreProps = {
  hand: CardProps[];
  setHand: (cards: CardProps[]) => void;
  removeCardFromHand: (cardId: string) => void;
};
