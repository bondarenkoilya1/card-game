import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { Button } from "src/components";

const DropdownButtonOpenedStyles = css`
  border: 2px solid rgb(147, 197, 253);
`;

export const DropdownButtonStyled = styled(Button)<{ isOpen: boolean }>`
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border: 2px solid transparent;

  ${({ isOpen }) => isOpen && DropdownButtonOpenedStyles}
`;
