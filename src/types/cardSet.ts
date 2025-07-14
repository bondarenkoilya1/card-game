import { CardProps } from "./card";

export type CardSetProps = {
  _id: string;
  cardSetName: string;
  slug: string;
  cards: CardProps[];
};

export type CardSetNameProp = Pick<CardSetProps, "cards">;

export type CardSetsProp = {
  cardSets: CardSetProps[];
};
