import { FC } from "react";

import { OptionListStyled } from "./styled";

import { CardSetOption } from "src/components";

import { CardSets } from "src/types";

type CardSetOptionsListProps = {
  cardSets: CardSets;
};

export const CardSetOptionsList: FC<CardSetOptionsListProps> = ({ cardSets }) => {
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
