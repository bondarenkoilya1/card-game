import { useEffect } from "react";

import { Error } from "src/components";
import { CardSet } from "src/components/CardSet";

import { ManageCardSetListStyled } from "src/layout/SectionManageCardSet/styled";

import { CardSetProps } from "src/types";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const SectionManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const { fetchCardSets, deleteCardSet, updateCardSet } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const renderCardSetList = () => (
    <ManageCardSetListStyled>
      {cardSets &&
        cardSets.map((set: CardSetProps) => (
          <CardSet
            set={set}
            deleteCardSet={deleteCardSet}
            updateCardSet={updateCardSet}
            key={set._id}
          />
        ))}
    </ManageCardSetListStyled>
  );

  return (
    <>
      {error && <Error unspecifiedErrorMessage={`${error} Try again or contact support.`} />}
      {isLoading ? "Loading..." : renderCardSetList()}
    </>
  );
};
