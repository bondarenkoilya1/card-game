import React from "react";

import styled from "@emotion/styled";

import woodImage from "../../../assets/photos/wood.jpg";

export const GamePageStyled = styled.div`
  background-color: #3a0707;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${woodImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const ContainerStyles: React.CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column"
};
