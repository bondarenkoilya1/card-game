import { FC } from "react";

import { BoardCardNameStyled, BoardCardStyled } from "./styled";

import { CardWrapperProps } from "src/types";

export const BoardCard: FC<CardWrapperProps> = ({ card, onClick }) => {
  const { name } = card;

  return (
    <BoardCardStyled onClick={onClick}>
      <BoardCardNameStyled>{name}</BoardCardNameStyled>
      {/*<BoardCardDescriptionStyled>{description}</BoardCardDescriptionStyled>*/}
      {/*<BoardCardTypeStyled>*/}
      {/*  Type: <BoardCardTextHighlighted>{type}</BoardCardTextHighlighted>*/}
      {/*</BoardCardTypeStyled>*/}
      {/*<BoardCardPointsStyled>*/}
      {/*  Points: <BoardCardTextHighlighted> {points}</BoardCardTextHighlighted>*/}
      {/*</BoardCardPointsStyled>*/}
    </BoardCardStyled>
  );
};
