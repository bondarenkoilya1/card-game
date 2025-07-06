import { FC } from "react";

import { OptionContainerStyled, OptionStyled, OptionTitleStyled } from "./styled";

import { CardSetOptionProps } from "src/types";

export const CardSetOption: FC<CardSetOptionProps> = ({ cardSetName, href }) => {
  return (
    <OptionContainerStyled>
      <OptionStyled cardsetname={cardSetName} to={href}>
        <OptionTitleStyled>{cardSetName}</OptionTitleStyled>
      </OptionStyled>
    </OptionContainerStyled>
  );
};
