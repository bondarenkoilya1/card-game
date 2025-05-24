import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const AdminPanelStyled = styled.section`
  color: #000;
  padding: 20px 0 0 20px;
`;

export const AdminPanelTitleStyled = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
`;

export const AdminPanelButtonStyles = css`
  margin: 20px auto 0 auto;
  transition: all 0.3s ease-in-out;

  &:active {
    background-color: #c1b4b4;
    transition: all 0.3s ease-in-out;
  }
`;

export const AdminPanelErrorStyled = styled.p`
  color: ${({ theme }) => theme.colors.red["400"]};
`;
