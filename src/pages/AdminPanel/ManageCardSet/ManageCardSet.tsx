import { useEffect } from "react";

import { ManageCardSetListStyled } from "./styled";

import { AdminPanelErrorStyled } from "src/pages/AdminPanel/styled.ts";

import { CardSet } from "src/components/CardSet";

import { CardSetProps } from "src/types";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const ManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const { fetchCardSets, deleteCardSet, updateCardSet } = useCardSetHTTPMethod();

  const renderError = (error: string | null) =>
    error && <AdminPanelErrorStyled>Error occurred. {error}</AdminPanelErrorStyled>;

  useEffect(() => {
    fetchCardSets();
  }, []);

  return (
    <>
      {renderError(error)}
      {isLoading ? (
        "Loading..."
      ) : (
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
      )}
    </>
  );
};
