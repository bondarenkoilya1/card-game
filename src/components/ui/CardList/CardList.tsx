import { FC } from "react";

import { CardListStyled } from "./styled";

import { CardProps } from "src/types";

import { Card } from "../Card";

import { CardListProps } from "./types";

// TODO: Sort ./types, ../types, src/types imports together TODO
// Currently used only for admin panel. Not a full ui component
export const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <CardListStyled>
      {cards.map((card: CardProps) => (
        <Card location="adminPanel" card={card} key={card._id} />
      ))}
    </CardListStyled>
  );
};
