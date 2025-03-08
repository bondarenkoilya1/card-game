import { css } from "@emotion/react";

import styled from "@emotion/styled";

import youngManPhoto from "../../../assets/photos/sectionPrimary/young-man.png";

// todo: bring color to the global color group: #146EE4, #f21e1e

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
  color: #146ee4;
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

export const LearnButtonStyles = css`
  border: 4px solid #f21e1e;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  padding: 20px;
  color: #f21e1e;
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
    border-color: #d62121;
    color: #d62121;

    & svg {
      transition: all 0.3s ease-in-out;
      color: #d62121;
    }
  }
`;
