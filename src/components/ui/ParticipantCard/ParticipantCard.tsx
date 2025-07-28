import { FC } from "react";

import { ParticipantCardStyled, ScoreStyles, TextStyled, TitleStyled } from "./styled";

import { Score } from "src/components";

import { ParticipantCardProps } from "./types";

export const ParticipantCard: FC<ParticipantCardProps> = ({ participant, score, cardSetName }) => {
  return (
    <ParticipantCardStyled>
      <TitleStyled>{participant}</TitleStyled>
      <TextStyled>{cardSetName}</TextStyled>
      <Score score={score} outsideStyles={ScoreStyles} />
    </ParticipantCardStyled>
  );
};
