import { FC } from "react";

import { CardNameStyled, CardStyled } from "../styled";

import { CardWrapperProps } from "src/types";

export const BoardCard: FC<CardWrapperProps> = ({ card, onClick, location }) => {
  const { name } = card;

  return (
    <CardStyled location={location} onClick={onClick}>
      <CardNameStyled>{name}</CardNameStyled>
      {/*<CardDescriptionStyled>{description}</CardDescriptionStyled>*/}
      {/*<CardTypeStyled>*/}
      {/*  Type: <CardTextHighlighted>{type}</CardTextHighlighted>*/}
      {/*</CardTypeStyled>*/}
      {/*<CardPointsStyled>*/}
      {/*  Points: <CardTextHighlighted> {points}</CardTextHighlighted>*/}
      {/*</CardPointsStyled>*/}
    </CardStyled>
  );
};
