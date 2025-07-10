import React, { useState } from "react";

import {
  AdditionalBlockStyled,
  BlockWithMarginTopStyled,
  ButtonStyles,
  ContainerStyled,
  MainBlockStyled,
  OptionBlockStyled,
  TextStyled,
  TitleStyled,
  UploadCardSetFormStyled
} from "./styled";
import styled from "@emotion/styled";

import { CARD_TYPES } from "src/constants";

import { Button, RadioButton, RadioButtonList, TextField } from "src/components";

import { CardType } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

import { useUploadCardSetStore } from "src/store";

type AnswerType = "yes" | "no";

const answers: AnswerType[] = ["yes", "no"];

const UploadCardSetFormButtonStyled = styled(Button)(ButtonStyles);

export const UploadCardSetForm = () => {
  const {
    cardsToUpload,
    formData,
    setCardsToUpload,
    clearCardsToUpload,
    setSpecificFormDataField,
    clearSpecificFormDataField
  } = useUploadCardSetStore();

  const [hasCardsOnUpload, setHasCardsOnUpload] = useState(true);

  const { cardSetName, cardName, cardPoints } = formData;
  const selectedCardType = formData.cardType;

  const handleSetHasCardsOnUpload = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnUpload(event.currentTarget.value === "yes");

  const handleSetSelectedCardType = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSpecificFormDataField("cardType", event.currentTarget.value as CardType);

  const resetAddCardForm = () => {
    clearSpecificFormDataField("cardName");
    clearSpecificFormDataField("cardType");
    clearSpecificFormDataField("cardPoints");
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cardSetName) throw new Error("Card set name is required.");

    const dataToSend = {
      cardSetName: cardSetName,
      cards: hasCardsOnUpload ? cardsToUpload : []
    };

    const requestHeaders = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    const options = {
      headers: requestHeaders,
      method: "POST",
      body: JSON.stringify(dataToSend)
    };

    try {
      await fetchItem("/card-sets", options);
    } catch (error) {
      const errorMessage = validateError(error);
      throw new Error(errorMessage);
    } finally {
      clearSpecificFormDataField("cardSetName");
      clearCardsToUpload();
    }
  };

  const handleAddCardToUpload = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!cardName) throw new Error("Card name is required.");

    const currentCard = { name: cardName, type: selectedCardType, points: cardPoints };

    // @ts-ignore todo: create new type for this one
    setCardsToUpload([...cardsToUpload, currentCard]);
    resetAddCardForm();
  };

  return (
    <ContainerStyled>
      <TitleStyled>Upload card set</TitleStyled>
      <UploadCardSetFormStyled onSubmit={handleSubmitForm}>
        <MainBlockStyled>
          <TextField
            id="card-set-name__input"
            labelText="Card set name"
            type="text"
            placeholder="Chemicals"
            value={cardSetName}
            onChange={(event) => setSpecificFormDataField("cardSetName", event.currentTarget.value)}
          />
          <OptionBlockStyled>
            <TextStyled>Do you want to add some cards on start?</TextStyled>
            <RadioButtonList>
              {answers.map((answer) => (
                <RadioButton
                  key={answer}
                  id={`has-cards__radio--${answer}`}
                  labelText={answer.toCapitalize()}
                  name="hasCards"
                  value={answer}
                  isChecked={hasCardsOnUpload === (answer === "yes")}
                  onChange={handleSetHasCardsOnUpload}
                />
              ))}
            </RadioButtonList>
          </OptionBlockStyled>
        </MainBlockStyled>

        {hasCardsOnUpload && (
          <AdditionalBlockStyled>
            <TextStyled style={{ textAlign: "center" }}>
              I want to add a card with the following properties:
            </TextStyled>
            <BlockWithMarginTopStyled marginTop={20}>
              <TextField
                id="card-name__input"
                labelText="Card name"
                type="text"
                placeholder="Zync"
                value={cardName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSpecificFormDataField("cardName", event.currentTarget.value)
                }
              />
            </BlockWithMarginTopStyled>
            <TextStyled style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
              Card type
            </TextStyled>
            <RadioButtonList>
              {CARD_TYPES.map((cardType) => (
                <RadioButton
                  key={cardType}
                  id={`card-type__radio--${cardType}`}
                  labelText={cardType.toCapitalize()}
                  name="cardType"
                  value={cardType}
                  isChecked={selectedCardType === cardType}
                  onChange={handleSetSelectedCardType}
                />
              ))}
            </RadioButtonList>
            <BlockWithMarginTopStyled marginTop={20}>
              <TextField
                id="card-points__input"
                labelText="Card points"
                type="number"
                placeholder="6"
                min="0"
                value={cardPoints}
                onChange={(event) =>
                  setSpecificFormDataField("cardPoints", +event.currentTarget.value)
                }
              />
            </BlockWithMarginTopStyled>
            <Button
              variant="secondary"
              style={{ width: "100%", marginTop: "12px" }}
              onClick={handleAddCardToUpload}>
              Add new card to this card set
            </Button>
          </AdditionalBlockStyled>
        )}
        <UploadCardSetFormButtonStyled type="submit" disabled={!cardSetName.trim()}>
          Upload card set
        </UploadCardSetFormButtonStyled>
      </UploadCardSetFormStyled>
    </ContainerStyled>
  );
};
