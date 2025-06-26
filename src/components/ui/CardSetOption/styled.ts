import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

// TODO: Here i firstly introduce new naming system, which will be later used everywhere in this project
export const OptionContainerStyled = styled.li`
  margin-bottom: 1.5%;
`;

export const OptionStyled = styled(Link)<{ cardSetName: string }>`
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

  ${({ cardSetName }) => cardSetName === "Elements of War" && OptionAggressiveNationStyled}
  ${({ cardSetName }) => cardSetName === "Forged Legion" && OptionForestNationStyled}
  ${({ cardSetName }) => cardSetName === "Iron Regiment" && OptionTradeNationStyled}
  ${({ cardSetName }) => cardSetName === "Macedonian Phalanx" && OptionDefensiveNationStyled}
  ${({ cardSetName }) => cardSetName === "Steelborn Division" && OptionMercenaryNationStyled}
`;

export const OptionTitleStyled = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

// TODO: The word "nation" may not be correct here; Current names are temporary
const OptionAggressiveNationStyled = css`
  background-color: #ea7575;
  color: #fff;

  & > h2 {
    color: #731111;
  }
`;

const OptionForestNationStyled = css`
  background-color: #4d986d;
  color: #fff;

  & > h2 {
    color: #104f2b;
  }
`;

const OptionTradeNationStyled = css`
  background-color: #e1df4c;
  color: #fff;

  & > h2 {
    color: #64640d;
  }
`;

const OptionDefensiveNationStyled = css`
  background-color: #8585ff;
  color: #fff;

  & > h2 {
    color: #212150;
  }
`;

const OptionMercenaryNationStyled = css`
  background-color: #77756e;
  color: #fff;

  & > h2 {
    color: #2c2b29;
  }
`;
