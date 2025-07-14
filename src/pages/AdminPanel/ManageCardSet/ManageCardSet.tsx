import { useEffect, useState } from "react";

import {
  ManageCardSetStyled,
  RetryButtonStyled,
  RetryContainerStyled,
  RetryTextStyled,
  SectionStyled,
  SwitchButtonStyled
} from "./styled";

import { Dropdown, DropdownItem, ErrorComponent } from "src/components";

// import { CardSet } from "src/components/CardSet";
import { CardSetProps } from "src/types";

import { findCardSetByName } from "src/utils";

import { fetchCardSets } from "src/api";

import { useCardSetsStore } from "src/store";

export const ManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const [selectedCardSet, setSelectedCardSet] = useState<CardSetProps | null>(null);

  useEffect(() => {
    fetchCardSets();
  }, []);

  useEffect(() => setSelectedCardSet(cardSets[0] || null), [cardSets]);

  const handleCardSetSelect = (cardSetName: string) => {
    const matchingCardSet = findCardSetByName(cardSets, cardSetName);
    setSelectedCardSet(matchingCardSet || null);
  };

  const selectedCardSetIndex = cardSets.findIndex((cardSet) => cardSet === selectedCardSet);
  const isPrevButtonDisabled = selectedCardSetIndex <= 0;
  const isNextButtonDisabled = selectedCardSetIndex >= cardSets.length - 1;

  const switchCardSet = (direction: "prev" | "next") => {
    if (direction === "prev" && isPrevButtonDisabled)
      throw new Error("There is no more cards before this one.");
    if (direction === "next" && isNextButtonDisabled)
      throw new Error("There is no more cards after this one.");

    const newCardSetIndex =
      direction === "prev" ? selectedCardSetIndex - 1 : selectedCardSetIndex + 1;

    if (newCardSetIndex < 0 || newCardSetIndex >= cardSets.length) return;

    setSelectedCardSet(cardSets[newCardSetIndex]);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error || !selectedCardSet)
    return (
      <>
        {/* TODO: Later make its UI more noticeable  */}
        <RetryContainerStyled>
          <RetryTextStyled>Card set did not load?</RetryTextStyled>
          <RetryButtonStyled variant="tertiary" onClick={fetchCardSets}>
            Try again
          </RetryButtonStyled>
        </RetryContainerStyled>
        <ErrorComponent unspecifiedErrorMessage={`${error}. Try again or contact support`} />
      </>
    );

  return (
    <SectionStyled>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Dropdown buttonText="Select card set">
          {cardSets.map(({ cardSetName }) => (
            <DropdownItem key={cardSetName} onClick={() => handleCardSetSelect(cardSetName)}>
              {cardSetName}
            </DropdownItem>
          ))}
        </Dropdown>
        <SwitchButtonStyled
          variant="tertiary"
          style={{ margin: "0 20px" }}
          onClick={() => switchCardSet("prev")}
          disabled={isPrevButtonDisabled}>
          {"<"} Previous
        </SwitchButtonStyled>
        <SwitchButtonStyled
          variant="tertiary"
          onClick={() => switchCardSet("next")}
          disabled={isNextButtonDisabled}>
          Next {">"}
        </SwitchButtonStyled>
      </div>
      <ManageCardSetStyled>
        // TODO: Cannot be used. Refactor with useMutate (react query)
        {/*<CardSet*/}
        {/*  set={selectedCardSet}*/}
        {/*  // deleteCardSet={deleteCardSet}*/}
        {/*  // updateCardSet={updateCardSet}*/}
        {/*  key={selectedCardSet._id}*/}
        {/*/>*/}
      </ManageCardSetStyled>
    </SectionStyled>
  );
};
