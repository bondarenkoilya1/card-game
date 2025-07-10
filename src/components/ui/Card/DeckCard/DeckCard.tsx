import { FC } from "react";

import { CardStyled, HighlightedTextStyled, NameStyled, PointsStyled, TypeStyled } from "../styled";

import { CardWrapperProps } from "src/types";

export const DeckCard: FC<CardWrapperProps> = ({ card, onClick, location }) => {
  const { name, type, points } = card;

  return (
    <CardStyled onClick={onClick} location={location}>
      <NameStyled>{name}</NameStyled>
      {/*<DescriptionStyled>{description}</DescriptionStyled>*/}
      <PointsStyled>
        <HighlightedTextStyled> {points}</HighlightedTextStyled> points
      </PointsStyled>
      <TypeStyled>
        <HighlightedTextStyled>{type}</HighlightedTextStyled> unit
      </TypeStyled>
    </CardStyled>
  );
};
