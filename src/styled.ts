import emotionReset from "emotion-reset";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const GlobalStyle = css`
  ${emotionReset}

  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Inter", sans-serif;
    color: #fff;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1620px;
  margin: 0 auto;
`;
