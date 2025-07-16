import { FC } from "react";

import { HighlightedTextStyled, ScoreStyled } from "./styled";

import { ScoreProps } from "./types";

export const Score: FC<ScoreProps> = ({ participant, score }) => {
  return (
    <ScoreStyled>
      {participant} have <HighlightedTextStyled>{score}</HighlightedTextStyled> points
    </ScoreStyled>
  );
};
