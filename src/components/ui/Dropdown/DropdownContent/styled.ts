import { css } from "@emotion/react";

import styled from "@emotion/styled";

const DropdownContentOpenedStyles = css`
  opacity: 1;
  visibility: visible;
`;

export const DropdownContentStyled = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  max-height: 40vh;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 10;
  opacity: 0;
  visibility: hidden;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${({ isOpen }) => isOpen && DropdownContentOpenedStyles}
`;
