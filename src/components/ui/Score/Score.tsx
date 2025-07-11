import { FC } from "react";

import { HighlightedTextStyled, ScoreStyled } from "./styled";

import { ScoreProps } from "src/types";

export const Score: FC<ScoreProps> = ({ owner, score }) => {
  return (
    <ScoreStyled>
      {owner} have <HighlightedTextStyled>{score}</HighlightedTextStyled> points
    </ScoreStyled>
  );
};
