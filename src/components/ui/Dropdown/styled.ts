import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { Button } from "src/components";

export const DropdownStyled = styled.div`
  position: relative;
  width: fit-content;
`;

const ButtonOpenedStyles = css`
  border: 2px solid rgb(147, 197, 253);
`;

export const ButtonStyled = styled(Button)<{ isOpen: boolean }>`
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border: 2px solid transparent;
  font-size: 14px;

  ${({ isOpen }) => isOpen && ButtonOpenedStyles}
`;
