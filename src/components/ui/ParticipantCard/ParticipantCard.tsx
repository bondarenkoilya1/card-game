import { FC } from "react";

import { ParticipantCardStyled, ScoreStyles, TitleStyled } from "./styled";

import { Score } from "src/components";

import { ParticipantCardProps } from "./types";

export const ParticipantCard: FC<ParticipantCardProps> = ({ participant, score }) => {
  return (
    <ParticipantCardStyled>
      <TitleStyled>{participant}</TitleStyled>
      <Score score={score} outsideStyles={ScoreStyles} />
    </ParticipantCardStyled>
  );
};
