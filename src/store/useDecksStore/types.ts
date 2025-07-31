import { CardProps } from "src/types";

type DecksActionsType = {
  setPlayerCardSetName: (newCardSetName: string) => void;
  setBotCardSetName: (newCardSetName: string) => void;
  setPlayerDeck: (cards: CardProps[]) => void;
  addCardToPlayerDeck: (newCard: CardProps) => void;
  removeCardFromPlayerDeck: (cardId: string) => void;
  setBotDeck: (cards: CardProps[]) => void;
  addCardToBotDeck: (newCard: CardProps) => void;
  removeCardFromBotDeck: (cardId: string) => void;
};

export type DecksStoreProps = {
  playerCardSetName: string;
  botCardSetName: string;
  playerDeck: CardProps[];
  botDeck: CardProps[];
  actions: DecksActionsType;
};
