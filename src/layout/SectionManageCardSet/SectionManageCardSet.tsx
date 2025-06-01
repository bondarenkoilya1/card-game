import React, { useEffect, useState } from "react";

import {
  ManageCardSetListStyled,
  ManageCardSetSupportButtonStyled,
  ManageCardSetSupportContainerStyled,
  ManageCardSetSupportTextStyled,
  SectionManageCardSetStyled
} from "./styled";

import { Error } from "src/components";
import { CardSet } from "src/components/CardSet";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const SectionManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const { fetchCardSets, deleteCardSet, updateCardSet } = useCardSetHTTPMethod();
  const [cardSetNames, setCardSetNames] = useState<string[]>([]);
  const [currentCardSet, setCurrentCardSet] = useState<string>(cardSetNames[0]);

  useEffect(() => {
    fetchCardSets();
  }, []);

  useEffect(() => setCardSetNames(cardSets.map((cardSet) => cardSet.cardSetName)), [cardSets]);

  // console.log(cardSets.filter((cardSet) => cardSet.cardSetName === "xcv"));

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCardSet(event.target.value || cardSetNames[0]);
  };

  const renderCardSetList = () => {
    /* Here we will render _currentSet;
    We will set _currentSet when select has changed
    And filter cardSets to find set with the identical name with selected option */
    const firstSet = cardSets?.[0];
    if (!firstSet) return <p>No card sets available.</p>;

    return (
      <ManageCardSetListStyled>
        <CardSet
          set={firstSet}
          deleteCardSet={deleteCardSet}
          updateCardSet={updateCardSet}
          key={firstSet._id}
        />
      </ManageCardSetListStyled>
    );
  };

  // TODO: Later make it more noticeable
  const renderSupportSection = () => (
    <ManageCardSetSupportContainerStyled>
      <ManageCardSetSupportTextStyled>Card set did not load?</ManageCardSetSupportTextStyled>
      <ManageCardSetSupportButtonStyled variant="tertiary" onClick={() => fetchCardSets()}>
        Try again
      </ManageCardSetSupportButtonStyled>
    </ManageCardSetSupportContainerStyled>
  );

  return (
    <SectionManageCardSetStyled>
      {error && renderSupportSection()}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="select_card-sets">Select card set</label>
        <select
          name="card-sets"
          id="select_card-sets"
          style={{ width: "fit-content" }}
          onChange={handleSelect}>
          {cardSetNames.map((cardSetName) => (
            <option key={cardSetName} value={cardSetName}>
              {cardSetName}
            </option>
          ))}
        </select>
      </div>

      {error && <Error unspecifiedErrorMessage={`${error}. Try again or contact support`} />}
      {isLoading ? "Loading..." : renderCardSetList()}
    </SectionManageCardSetStyled>
  );
};
