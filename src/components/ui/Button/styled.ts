import { css } from "@emotion/react";

import styled from "@emotion/styled";

const FilledButtonStyles = css`
  background-color: #667cf8;
  color: #fff;
  border: 1px solid #1b39d7;
`;

const OutlinedButtonStyles = css`
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
`;

const LinkedButtonStyles = css`
  background-color: transparent;
  border: 0;
  color: #1930b2;
`;

export const ButtonStyled = styled.button<{ variant: "primary" | "secondary" | "tertiary" }>`
  outline: 1px solid transparent;
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ variant }) => variant === "primary" && FilledButtonStyles}
  ${({ variant }) => variant === "secondary" && OutlinedButtonStyles}
    ${({ variant }) => variant === "tertiary" && LinkedButtonStyles}
  
  
    &[disabled] {
    background-color: #989898;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// export const LeftIconStyled = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;
