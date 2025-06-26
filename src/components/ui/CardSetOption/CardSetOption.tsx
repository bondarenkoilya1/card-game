import { FC } from "react";

import { OptionContainerStyled, OptionStyled, OptionTitleStyled } from "./styled";

type CardSetOptionProps = {
  cardSetName: string;
  href: string;
};

export const CardSetOption: FC<CardSetOptionProps> = ({ cardSetName, href }) => {
  return (
    <OptionContainerStyled>
      <OptionStyled cardSetName={cardSetName} to={href}>
        <OptionTitleStyled>{cardSetName}</OptionTitleStyled>
      </OptionStyled>
    </OptionContainerStyled>
  );
};
