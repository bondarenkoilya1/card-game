import React from "react";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import woodImage from "../../../assets/photos/wood.jpg";

export const GamePageStyled = styled.div`
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${woodImage}) center/cover no-repeat;
  height: 100%;
  width: 100%;
`;

export const ContainerStyles: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column"
};

export const HandStyles = css`
  margin-top: auto;
  margin-bottom: 5%;
`;
