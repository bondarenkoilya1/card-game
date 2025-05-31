import { FC } from "react";

import { CardListContainerStyled, CardSetStyled } from "./styled";

import { CardList, CardSetInfo } from "src/components";

import { CardSetWrapperProps } from "src/types";

export const CardSet: FC<CardSetWrapperProps> = ({ set, deleteCardSet, updateCardSet }) => {
  return (
    <CardSetStyled>
      <CardSetInfo
        name={set.cardSetName}
        id={set._id}
        deleteCardSet={() => deleteCardSet(set._id)}
        updateCardSet={updateCardSet}
        cardsQuantity={set.cards.length}
      />
      <CardListContainerStyled>
        <CardList cards={set.cards} />
      </CardListContainerStyled>
    </CardSetStyled>
  );
};
