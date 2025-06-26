import styled from "@emotion/styled";

import { RowType } from "../../../types";

export const CardRowStyled = styled.ul<{ type: RowType }>`
  display: flex;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 12px;
  width: 100%;
  height: 104px;
  overflow: hidden;
  overflow-x: auto;
`;
