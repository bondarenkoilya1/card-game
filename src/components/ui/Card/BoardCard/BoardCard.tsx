import { FC } from "react";

import { CardStyled, NameStyled } from "../styled";

import { CardWrapperProps } from "src/types";

export const BoardCard: FC<CardWrapperProps> = ({ card, onClick, location }) => {
  const { name } = card;

  return (
    <CardStyled location={location} onClick={onClick}>
      <NameStyled>{name}</NameStyled>
      {/*<DescriptionStyled>{description}</DescriptionStyled>*/}
      {/*<TypeStyled>*/}
      {/*  Type: <HighlightedTextStyled>{type}</HighlightedTextStyled>*/}
      {/*</TypeStyled>*/}
      {/*<PointsStyled>*/}
      {/*  Points: <HighlightedTextStyled> {points}</HighlightedTextStyled>*/}
      {/*</PointsStyled>*/}
    </CardStyled>
  );
};
