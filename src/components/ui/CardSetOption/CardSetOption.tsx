import { FC } from "react";

import { CardSetOptionStyled, ContainerStyled, TitleStyled } from "./styled";

import { CardSetOptionProps } from "./types";

export const CardSetOption: FC<CardSetOptionProps> = ({ cardSetName, href }) => {
  return (
    <ContainerStyled>
      <CardSetOptionStyled cardsetname={cardSetName} to={href}>
        <TitleStyled>{cardSetName}</TitleStyled>
      </CardSetOptionStyled>
    </ContainerStyled>
  );
};
