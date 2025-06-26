import { FC } from "react";

import { OptionStyled, OptionTitleStyled } from "./styled";

type CardSetOptionProps = {
  cardSetName: string;
};

export const CardSetOption: FC<CardSetOptionProps> = ({ cardSetName }) => {
  return (
    <OptionStyled cardSetName={cardSetName}>
      <OptionTitleStyled>{cardSetName}</OptionTitleStyled>
    </OptionStyled>
  );
};
