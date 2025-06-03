import React, { useEffect, useState } from "react";

import {
  ManageCardSetListStyled,
  ManageCardSetSupportButtonStyled,
  ManageCardSetSupportContainerStyled,
  ManageCardSetSupportTextStyled,
  ManageCardSetSwitchButtonStyled,
  SectionManageCardSetStyled
} from "./styled";

import { Error as ErrorComponent } from "src/components";
import { CardSet } from "src/components/CardSet";

import { CardSetProps } from "src/types";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const SectionManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const { fetchCardSets, deleteCardSet, updateCardSet } = useCardSetHTTPMethod();
  const [selectedCardSet, setSelectedCardSet] = useState<CardSetProps | null>(null);

  useEffect(() => {
    fetchCardSets();
  }, []);

  useEffect(() => setSelectedCardSet(cardSets[0] || null), [cardSets]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const matchingCardSet = cardSets.find((cardSet) => cardSet.cardSetName === event.target.value);
    setSelectedCardSet(matchingCardSet || null);
  };

  const selectedCardSetIndex = cardSets.findIndex((cardSet) => cardSet === selectedCardSet);
  const isPrevButtonDisabled = selectedCardSetIndex <= 0;
  const isNextButtonDisabled = selectedCardSetIndex >= cardSets.length - 1;

  const switchCardSet = (direction: "prev" | "next") => {
    const newCardSetIndex =
      direction === "prev" ? selectedCardSetIndex - 1 : selectedCardSetIndex + 1;

    if (newCardSetIndex < 0 || newCardSetIndex >= cardSets.length) return;

    setSelectedCardSet(cardSets[newCardSetIndex]);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error || !selectedCardSet)
    return (
      <>
        {/* TODO: Later make its UI more noticeable  TODO: Change Support to Retry*/}
        <ManageCardSetSupportContainerStyled>
          <ManageCardSetSupportTextStyled>Card set did not load?</ManageCardSetSupportTextStyled>
          <ManageCardSetSupportButtonStyled variant="tertiary" onClick={fetchCardSets}>
            Try again
          </ManageCardSetSupportButtonStyled>
        </ManageCardSetSupportContainerStyled>
        <ErrorComponent unspecifiedErrorMessage={`${error}. Try again or contact support`} />
      </>
    );

  return (
    <SectionManageCardSetStyled>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", marginRight: "40px" }}>
          <label htmlFor="select_card-sets">Select card set</label>
          <select
            name="card-sets"
            id="select_card-sets"
            style={{ width: "fit-content" }}
            onChange={handleSelect}>
            {cardSets.map(({ cardSetName }) => (
              <option key={cardSetName} value={cardSetName}>
                {cardSetName}
              </option>
            ))}
          </select>
        </div>
        <ManageCardSetSwitchButtonStyled
          variant="tertiary"
          style={{ marginRight: "20px" }}
          onClick={() => switchCardSet("prev")}
          disabled={isPrevButtonDisabled}>
          {"<"} Previous
        </ManageCardSetSwitchButtonStyled>
        <ManageCardSetSwitchButtonStyled
          variant="tertiary"
          onClick={() => switchCardSet("next")}
          disabled={isNextButtonDisabled}>
          Next {">"}
        </ManageCardSetSwitchButtonStyled>
      </div>
      <ManageCardSetListStyled>
        <CardSet
          set={selectedCardSet}
          deleteCardSet={deleteCardSet}
          updateCardSet={updateCardSet}
          key={selectedCardSet._id}
        />
      </ManageCardSetListStyled>
    </SectionManageCardSetStyled>
  );
};
