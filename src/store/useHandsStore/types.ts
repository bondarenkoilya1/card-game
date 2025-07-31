import { CardProps } from "src/types";

type HandsActionsType = {
  setPlayerHand: (cards: CardProps[]) => void;
  removeCardFromPlayerHand: (cardId: string) => void;
  setBotHand: (cards: CardProps[]) => void;
  removeCardFromBotHand: (cardId: string) => void;
};

export type HandsStoreProps = {
  playerHand: CardProps[];
  botHand: CardProps[];
  actions: HandsActionsType;
};
