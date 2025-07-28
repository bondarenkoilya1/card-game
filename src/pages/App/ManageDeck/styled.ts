import { css } from "@emotion/react";

import styled from "@emotion/styled";
import { HeaderSize } from "src/styled";

import { Button } from "src/components";

export const ManageDeckStyled = styled.section`
  color: #000;
  margin-top: 40px;
  padding-top: ${HeaderSize}px;
  padding-bottom: 100px;
`;

export const TitleStyled = styled.h2`
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const SubtitleStyled = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const DecksContainerStyled = styled.div`
  display: flex;
`;

export const CardRowStyles = css`
  gap: 10px;
  overflow: visible;
`;

export const ButtonStyled = styled(Button)`
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 160px;

  &:disabled {
    border: none;
  }
`;
