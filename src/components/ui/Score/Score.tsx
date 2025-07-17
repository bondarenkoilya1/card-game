import { FC } from "react";

import { HighlightedTextStyled, ScoreStyled } from "./styled";

import { ScoreProps } from "./types";

export const Score: FC<ScoreProps> = ({ score, outsideStyles }) => {
  return (
    <ScoreStyled css={outsideStyles}>
      <HighlightedTextStyled>{score}</HighlightedTextStyled> points
    </ScoreStyled>
  );
};
