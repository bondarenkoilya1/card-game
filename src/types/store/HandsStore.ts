import { CardProps } from "src/types";

export type HandsStoreProps = {
  playerHand: CardProps[];
  setPlayerHand: (cards: CardProps[]) => void;
  removeCardFromPlayerHand: (cardId: string) => void;
  botHand: CardProps[];
  setBotHand: (cards: CardProps[]) => void;
  removeCardFromBotHand: (cardId: string) => void;
};
