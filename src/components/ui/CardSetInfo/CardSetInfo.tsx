import React, { FC, useState } from "react";

import {
  CardSetInfoDeleteButtonStyled,
  CardSetInfoFormStyled,
  CardSetInfoIDStyled,
  CardSetInfoNameStyled,
  CardSetInfoQuantityStyled,
  CardSetInfoStyled,
  CardSetInfoTextFieldStyled,
  CardSetInfoTitleStyled,
  CardSetInfoUpdateButtonStyled
} from "./styled";

import { CardSetInfoProps } from "src/types";

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
    inputValue && updateCardSet(id, "cardSetName", inputValue);
  };

  return (
    <CardSetInfoStyled>
      <CardSetInfoTitleStyled>
        <CardSetInfoNameStyled>{name}</CardSetInfoNameStyled>
        <CardSetInfoIDStyled>{id}</CardSetInfoIDStyled>
      </CardSetInfoTitleStyled>
      <CardSetInfoFormStyled onSubmit={handleSubmit}>
        <CardSetInfoTextFieldStyled
          value={inputValue}
          onChange={(event) => handleInputValueChange(event)}
          type="text"
          placeholder="Avalonians"
          // labelText="Enter new card set name"
        />
        <CardSetInfoUpdateButtonStyled variant="secondary" type="submit" disabled={!inputValue}>
          Change
        </CardSetInfoUpdateButtonStyled>
      </CardSetInfoFormStyled>
      {renderCardsQuantity(cardsQuantity)}
      <CardSetInfoDeleteButtonStyled variant="primary" onClick={deleteCardSet}>
        Delete card set
      </CardSetInfoDeleteButtonStyled>
    </CardSetInfoStyled>
  );
};

function renderCardsQuantity(cardsQuantity: number) {
  if (cardsQuantity === 0)
    return <CardSetInfoQuantityStyled>No cards in this set</CardSetInfoQuantityStyled>;
  const label = cardsQuantity === 1 ? "card" : "cards";

  return (
    <CardSetInfoQuantityStyled>
      <span>{cardsQuantity}</span> {label} in this set
    </CardSetInfoQuantityStyled>
  );
}
