import { FC } from "react";

import { ScoreHighlightedStyled, ScoreStyled } from "./styled";

import { ScoreProps } from "src/types";

export const Score: FC<ScoreProps> = ({ owner, score }) => {
  return (
    <ScoreStyled>
      {owner} have <ScoreHighlightedStyled>{score}</ScoreHighlightedStyled> points
    </ScoreStyled>
  );
};
