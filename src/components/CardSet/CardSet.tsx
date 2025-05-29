import { FC } from "react";

import { CardList, CardSetInfo } from "src/components";

import { CardSetWrapperProps } from "src/types";

export const CardSet: FC<CardSetWrapperProps> = ({ set, deleteCardSet, updateCardSet }) => {
  return (
    <>
      <CardSetInfo
        name={set.cardSetName}
        id={set._id}
        deleteCardSet={() => deleteCardSet(set._id)}
        updateCardSet={updateCardSet}
        cardsQuantity={set.cards.length}
      />
      <CardList cards={set.cards} />
    </>
  );
};
