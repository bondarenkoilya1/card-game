import { CardProps } from "src/types";

export type useGameDeckStoreProps = {
  selectedDeck: CardProps[];
  setCardsInDeck: (cards: CardProps[]) => void;
  addCardToDeck: (newCard: CardProps) => void;
  removeCardFromDeck: (cardId: string) => void;
};
