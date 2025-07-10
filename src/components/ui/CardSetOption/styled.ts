import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const ContainerStyled = styled.li`
  margin-bottom: 1.5%;
`;

export const CardSetOptionStyled = styled(Link)<{ cardsetname: string }>`
  display: block;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  width: 300px;
  height: 400px;
  padding: 30px;

  /* TODO: Card set name is kinda long string, but at the moment I have no idea how to replace it without adding new object fields
       Maybe create those styles as something global like "OptionForestNationStyled", "OptionAggressiveWarriorsStyled" */

  ${({ cardsetname }) => cardsetname === "Elements of War" && AggressiveNationStyled}
  ${({ cardsetname }) => cardsetname === "Forged Legion" && ForestNationStyled}
  ${({ cardsetname }) => cardsetname === "Iron Regiment" && TradeNationStyled}
  ${({ cardsetname }) => cardsetname === "Macedonian Phalanx" && DefensiveNationStyled}
  ${({ cardsetname }) => cardsetname === "Steelborn Division" && MercenaryNationStyled}
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
    color: #104f2b;
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
