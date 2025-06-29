import { useEffect, useState } from "react";

import {
  ManageCardSetRetryButtonStyled,
  ManageCardSetRetryContainerStyled,
  ManageCardSetRetryTextStyled,
  ManageCardSetStyled,
  ManageCardSetSwitchButtonStyled,
  SectionManageCardSetStyled
} from "./styled";

import { Dropdown, DropdownItem, Error as ErrorComponent } from "src/components";
import { CardSet } from "src/components/CardSet";

import { CardSetProps } from "src/types";

import { findCardSetByName } from "src/utils";

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

  const handleSelect = (cardSetName: string) => {
    const matchingCardSet = findCardSetByName(cardSets, cardSetName);
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
        {/* TODO: Later make its UI more noticeable  */}
        <ManageCardSetRetryContainerStyled>
          <ManageCardSetRetryTextStyled>Card set did not load?</ManageCardSetRetryTextStyled>
          <ManageCardSetRetryButtonStyled variant="tertiary" onClick={fetchCardSets}>
            Try again
          </ManageCardSetRetryButtonStyled>
        </ManageCardSetRetryContainerStyled>
        <ErrorComponent unspecifiedErrorMessage={`${error}. Try again or contact support`} />
      </>
    );

  return (
    <SectionManageCardSetStyled>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Dropdown buttonText="Select card set">
          {cardSets.map(({ cardSetName }) => (
            <DropdownItem key={cardSetName} onClick={() => handleSelect(cardSetName)}>
              {cardSetName}
            </DropdownItem>
          ))}
        </Dropdown>
        <ManageCardSetSwitchButtonStyled
          variant="tertiary"
          style={{ margin: "0 20px" }}
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
      <ManageCardSetStyled>
        <CardSet
          set={selectedCardSet}
          deleteCardSet={deleteCardSet}
          updateCardSet={updateCardSet}
          key={selectedCardSet._id}
        />
      </ManageCardSetStyled>
    </SectionManageCardSetStyled>
  );
};
