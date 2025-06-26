import { css } from "@emotion/react";

import styled from "@emotion/styled";

// TODO: Here i firstly introduce new naming system, which will be later used everywhere in this project
export const OptionStyled = styled.li<{ cardSetName: string }>`
  list-style-type: none; // remove
  background-color: #fff;
  color: #000;
  width: 400px;
  height: 400px;
  padding: 30px;
  border-radius: 6px;

  /* TODO: Card set name is kinda long string, but at the moment I have no idea how to replace it without adding new object fields
   Maybe create those styles as something global like "OptionForestNationStyled", "OptionAggressiveWarriorsStyled" */
  ${({ cardSetName }) => cardSetName === "Elements of War" && OptionAggressiveNationStyled}
  ${({ cardSetName }) => cardSetName === "Macedonian Phalanx" && OptionDefensiveNationStyled}
`;

export const OptionTitleStyled = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

// TODO: The word "nation" may not be correct here
const OptionAggressiveNationStyled = css`
  background-color: red;
  color: #fff;

  & > h2 {
    color: #731111;
  }
`;

const OptionDefensiveNationStyled = css`
  background-color: blue;
  color: #fff;

  & > h2 {
    color: #212150;
  }
`;
