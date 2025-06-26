import { CardProps } from "./ui/Card";

export type CardSetProps = {
  _id: string;
  cardSetName: string;
  slug: string;
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

// TODO: rename
export type CardSets = CardSetProps[];
