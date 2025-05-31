import { FC } from "react";

import { CardListStyled } from "src/components/ui/CardList/styled.ts";

import { CardListProps, CardProps } from "src/types";

import { Card } from "../Card";

// Currently used only for admin panel
export const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <CardListStyled>
      {cards.map((card: CardProps) => (
        <Card location="adminPanel" card={card} key={card._id} />
      ))}
    </CardListStyled>
  );
};
