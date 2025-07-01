import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { RowType } from "src/types";

export const CardRowStyled = styled.ul<{ type: RowType }>`
  display: flex;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 12px;
  width: 100%;
  //  todo: maybe remove height at all
  height: 104px;
  overflow: hidden;
  overflow-x: auto;

  ${({ type }) => type === "deck" && CardRowDeckStyles}
`;

export const CardRowDeckStyles = css`
  height: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 50%;
`;
