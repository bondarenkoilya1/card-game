import { FC } from "react";

import { OptionListStyled } from "./styled";

import { CardSetOption } from "src/components";

import { CardSetsProp } from "src/types";

export const CardSetOptionsList: FC<CardSetsProp> = ({ cardSets }) => {
  return (
    <OptionListStyled>
      {cardSets &&
        cardSets.map((cardSet) => (
          <CardSetOption
            key={cardSet.cardSetName}
            cardSetName={cardSet.cardSetName}
            href={cardSet.slug}
          />
        ))}
    </OptionListStyled>
  );
};
