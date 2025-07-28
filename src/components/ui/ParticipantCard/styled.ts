import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const ParticipantCardStyled = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 26px;
  height: 200px; // todo temporarily
  width: 160px;
  text-align: center;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h5`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
`;

export const TextStyled = styled.p`
  margin-top: 20px;
`;

export const ScoreStyles = css`
  margin-top: auto;
  font-size: 14px;
`;
