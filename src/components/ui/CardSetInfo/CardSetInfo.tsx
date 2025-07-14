import React, { FC, useState } from "react";

import {
  CardSetInfoStyled,
  InfoDeleteButtonStyled,
  InfoFormStyled,
  InfoIDStyled,
  InfoNameStyled,
  InfoQuantityStyled,
  InfoTextFieldStyled,
  InfoTitleStyled,
  InfoUpdateButtonStyled
} from "./styled";

import { CardSetInfoProps } from "./types";

import { copyToClipboard } from "src/utils";

export const CardSetInfo: FC<CardSetInfoProps> = ({
  name,
  id,
  deleteCardSet,
  updateCardSet,
  cardsQuantity
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleSubmit = () => {
    if (!inputValue) throw new Error("You should enter new card set name.");
    updateCardSet(id, "cardSetName", inputValue);
  };

  return (
    <CardSetInfoStyled>
      <InfoTitleStyled>
        <InfoNameStyled>{name}</InfoNameStyled>
        <InfoIDStyled onClick={() => copyToClipboard(id)}>{id}</InfoIDStyled>
      </InfoTitleStyled>
      <InfoFormStyled onSubmit={handleSubmit}>
        <InfoTextFieldStyled
          value={inputValue}
          onChange={(event) => handleInputValueChange(event)}
          type="text"
          placeholder="Avalonians"
          // labelText="Enter new card set name"
        />
        <InfoUpdateButtonStyled variant="secondary" type="submit" disabled={!inputValue}>
          Change
        </InfoUpdateButtonStyled>
      </InfoFormStyled>
      {renderCardsQuantity(cardsQuantity)}
      <InfoDeleteButtonStyled variant="primary" onClick={deleteCardSet}>
        Delete card set
      </InfoDeleteButtonStyled>
    </CardSetInfoStyled>
  );
};

function renderCardsQuantity(cardsQuantity: number) {
  if (cardsQuantity === 0) return <InfoQuantityStyled>No cards in this set</InfoQuantityStyled>;
  const label = cardsQuantity === 1 ? "card" : "cards";

  return (
    <InfoQuantityStyled>
      <span>{cardsQuantity}</span> {label} in this set
    </InfoQuantityStyled>
  );
}
