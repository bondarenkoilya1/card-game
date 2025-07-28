import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const ContainerStyled = styled.li`
  margin-bottom: 1.5%;
`;

export const CardSetOptionStyled = styled(Link)<{ name: string }>`
  display: block;
  box-shadow: 0 2px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  width: 300px;
  height: 400px;
  padding: 30px;

  /* TODO: Card set name is kinda long string, but at the moment I have no idea how to replace it without adding new object fields
       Maybe create those styles as something global like "OptionForestNationStyled", "OptionAggressiveWarriorsStyled" */

  ${({ name }) => name === "Elements of War" && AggressiveNationStyled}
  ${({ name }) => name === "Forged Legion" && ForestNationStyled}
  ${({ name }) => name === "Iron Regiment" && TradeNationStyled}
  ${({ name }) => name === "Macedonian Phalanx" && DefensiveNationStyled}
  ${({ name }) => name === "Steelborn Division" && MercenaryNationStyled}
`;

export const TitleStyled = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

// TODO: The word "nation" may not be correct here; Current names are temporary
const AggressiveNationStyled = css`
  background-color: #ea7575;
  color: #fff;

  & > h2 {
    color: #731111;
  }
`;

const ForestNationStyled = css`
  background-color: #4d986d;
  color: #fff;

  & > h2 {
    color: #094824;
  }
`;

const TradeNationStyled = css`
  background-color: #e1df4c;
  color: #fff;

  & > h2 {
    color: #64640d;
  }
`;

const DefensiveNationStyled = css`
  background-color: #8585ff;
  color: #fff;

  & > h2 {
    color: #212150;
  }
`;

const MercenaryNationStyled = css`
  background-color: #77756e;
  color: #fff;

  & > h2 {
    color: #2c2b29;
  }
`;
