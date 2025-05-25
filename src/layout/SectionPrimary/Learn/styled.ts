import { css, Theme } from "@emotion/react";

import styled from "@emotion/styled";

import youngManPhoto from "../../../assets/photos/sectionPrimary/young-man.png";

// todo: maybe export to global styles
export const LearnStyled = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding-top: 100px;
  background: url(${youngManPhoto}) no-repeat center right -460px;
  background-size: contain;
  border-right: 3px solid #000;
`;

export const LearnTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.blue["400"]};
  font-size: 102px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

export const LearnDescriptionStyled = styled.p`
  color: #494444;
  font-size: 24px;
  text-align: center;
  margin: 20px auto 0 auto;
`;

export const LearnButtonStyles = (props: { theme: Theme }) => css`
  border: 4px solid ${props.theme.colors.red["400"]};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  padding: 20px;
  color: ${props.theme.colors.red["400"]};
  font-size: 24px;
  font-weight: 600;
  border-radius: 0;
  margin: 60px auto 0 auto;
  display: flex;
  justify-content: center;

  transition: all 0.3s ease-in-out;

  & svg {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    border-color: ${props.theme.colors.red["700"]};
    color: ${props.theme.colors.red["700"]};

    & svg {
      transition: all 0.3s ease-in-out;
      color: ${props.theme.colors.red["700"]};
    }
  }
`;
