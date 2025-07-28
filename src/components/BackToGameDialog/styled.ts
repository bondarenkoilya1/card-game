import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { Button } from "src/components";

export const BackToGameDialogStyled = styled.div`
  padding: 20px;
  color: #000;
  background-color: #fff;
  //  todo: temporarily
  width: 400px;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  border-radius: 0 0 0 16px;
`;

export const TextStyled = styled.span`
  font-size: 20px;
`;

export const ButtonContainerStyled = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;

const ButtonStyles = css`
  text-transform: uppercase;
`;

export const BigButtonStyled = styled(Button)`
  ${ButtonStyles};
  width: 60%;
`;

export const ButtonStyled = styled(Button)`
  ${ButtonStyles}
`;
