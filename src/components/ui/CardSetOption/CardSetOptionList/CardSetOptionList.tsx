import { FC } from "react";

import { CardSetOptionListStyled } from "./styled";

import { CardSetOption } from "src/components";

import { CardSetsProp } from "src/types";

export const CardSetOptionList: FC<CardSetsProp> = ({ cardSets }) => {
  return (
    <CardSetOptionListStyled>
      {cardSets &&
        cardSets.map((cardSet) => (
          <CardSetOption
            key={cardSet.cardSetName}
            cardSetName={cardSet.cardSetName}
            href={cardSet.slug}
          />
        ))}
    </CardSetOptionListStyled>
  );
};
