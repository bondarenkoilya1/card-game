import { FC } from "react";

import { CardListProps, CardProps } from "src/types";

import { Card } from "../Card";

// TODO: Add ul, styles
export const CardList: FC<CardListProps> = ({ cards }) => {
  return cards.map((card: CardProps) => <Card location="adminPanel" card={card} key={card._id} />);
};
