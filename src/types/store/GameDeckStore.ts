import { CardProps } from "src/types";

export type GameDeckStoreProps = {
  deck: CardProps[];
  setDeck: (cards: CardProps[]) => void;
  addCardToDeck: (newCard: CardProps) => void;
  removeCardFromDeck: (cardId: string) => void;
};
