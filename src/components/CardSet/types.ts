import { CardSetProps } from "src/types";

export type CardSetWrapperProps = {
  set: CardSetProps;
  deleteCardSet: (cardId: string) => void;
  updateCardSet: (
    cardId: string,
    nameOfItemToUpdate: "cardSetName" | "cardData",
    newCardSetName?: string | undefined
  ) => void;
};
