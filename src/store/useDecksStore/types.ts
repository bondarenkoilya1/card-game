import { CardProps } from "src/types";

export type DecksStoreProps = {
  selectedCardSetName: string;
  setSelectedCardSetName: (newCardSetName: string) => void;
  playerDeck: CardProps[];
  setPlayerDeck: (cards: CardProps[]) => void;
  addCardToPlayerDeck: (newCard: CardProps) => void;
  removeCardFromPlayerDeck: (cardId: string) => void;
  botDeck: CardProps[];
  setBotDeck: (cards: CardProps[]) => void;
  addCardToBotDeck: (newCard: CardProps) => void;
  removeCardFromBotDeck: (cardId: string) => void;
};
