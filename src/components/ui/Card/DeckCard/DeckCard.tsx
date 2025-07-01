import { FC } from "react";

import {
  CardNameStyled,
  CardPointsStyled,
  CardStyled,
  CardTextHighlighted,
  CardTypeStyled
} from "../styled";

import { CardWrapperProps } from "src/types";

export const DeckCard: FC<CardWrapperProps> = ({ card, onClick, location }) => {
  const { name, type, points } = card;

  return (
    <CardStyled onClick={onClick} location={location}>
      <CardNameStyled>{name}</CardNameStyled>
      {/*<CardDescriptionStyled>{description}</CardDescriptionStyled>*/}
      <CardPointsStyled>
        <CardTextHighlighted> {points}</CardTextHighlighted> points
      </CardPointsStyled>
      <CardTypeStyled>
        <CardTextHighlighted>{type}</CardTextHighlighted> unit
      </CardTypeStyled>
    </CardStyled>
  );
};
