import { CardSets } from "src/types";

export type CardSetStoreProps = {
  cardSets: CardSets;
  setCardSets: (newCardSets: CardSets) => void;
};
