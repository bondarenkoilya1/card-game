import { CardProps } from "./Card";

export type CardSetProps = {
  _id: string;
  cardSetName: string;
  cards: CardProps[];
};

export type CardSetNameProp = Pick<CardSetProps, "cards">;

export type CardSetWrapperProps = {
  set: CardSetProps;
  deleteCardSet: (cardId: string) => void;
  updateCardSet: (
    cardId: string,
    nameOfItemToUpdate: "cardSetName" | "cardData",
    newCardSetName?: string | undefined
  ) => void;
};

export type CardSets = CardSetProps[];
