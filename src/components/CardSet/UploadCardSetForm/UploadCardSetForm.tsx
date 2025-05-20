import React, { useState } from "react";

import {
  BlockWithMarginTopStyled,
  UploadCardSetFormAdditionalBlockStyled,
  UploadCardSetFormButtonStyles,
  UploadCardSetFormContainerStyled,
  UploadCardSetFormMainBlockStyled,
  UploadCardSetFormOptionBlockStyled,
  UploadCardSetFormStyled,
  UploadCardSetFormTextStyled,
  UploadCardSetFormTitleStyled
} from "./styled";
import styled from "@emotion/styled";

import { CARD_TYPES } from "src/constants";

import { Button, RadioButton, TextField } from "src/components";
import { RadioButtonList } from "src/components/ui/RadioButton/RadioButtonList";

import { CardType } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

import { useUploadCardSetStore } from "src/store";

type AnswerType = "yes" | "no";

const answers: AnswerType[] = ["yes", "no"];

const UploadCardSetFormButtonStyled = styled(Button)(UploadCardSetFormButtonStyles);

export const UploadCardSetForm = () => {
  const { cardsToUpload, setCardsToUpload, clearCardsToUpload } = useUploadCardSetStore();
  const [hasCardsOnUpload, setHasCardsOnUpload] = useState(true);

  const [cardSetName, setCardSetName] = useState<string>("");

  const [cardName, setCardName] = useState<string>("");
  const [selectedCardType, setSelectedCardType] = useState<CardType>("close");
  const [cardPoints, setCardPoints] = useState<number>(0);

  const handleSetHasCardsOnUpload = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnUpload(event.currentTarget.value === "yes");

  const handleSetSelectedCardType = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedCardType(event.currentTarget.value as CardType);

  const resetForm = () => {
    setCardName("");
    setSelectedCardType("close");
    setCardPoints(0);
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
      setCardSetName("");
      clearCardsToUpload();
    }
  };

  const handleAddCardToUpload = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!cardName) throw new Error("Card name is required.");

    const currentCard = { name: cardName, type: selectedCardType, points: cardPoints };

    setCardsToUpload([...cardsToUpload, currentCard]);
    resetForm();
  };

  return (
    <UploadCardSetFormContainerStyled>
      <UploadCardSetFormTitleStyled>Upload card set</UploadCardSetFormTitleStyled>
      <UploadCardSetFormStyled onSubmit={handleSubmitForm}>
        <UploadCardSetFormMainBlockStyled>
          <TextField
            id="card-set-name__input"
            labelText="Card set name"
            type="text"
            placeholder="Chemicals"
            value={cardSetName}
            onChange={(event) => setCardSetName(event.currentTarget.value)}
          />
          <UploadCardSetFormOptionBlockStyled>
            <UploadCardSetFormTextStyled>
              Do you want to add some cards on start?
            </UploadCardSetFormTextStyled>
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
          </UploadCardSetFormOptionBlockStyled>
        </UploadCardSetFormMainBlockStyled>

        {hasCardsOnUpload && (
          <UploadCardSetFormAdditionalBlockStyled>
            <UploadCardSetFormTextStyled style={{ textAlign: "center" }}>
              I want to add a card with the following properties:
            </UploadCardSetFormTextStyled>
            <BlockWithMarginTopStyled marginTop={20}>
              <TextField
                id="card-name__input"
                labelText="Card name"
                type="text"
                placeholder="Zync"
                value={cardName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCardName(event.currentTarget.value)
                }
              />
            </BlockWithMarginTopStyled>
            <UploadCardSetFormTextStyled
              style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
              Card type
            </UploadCardSetFormTextStyled>
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
                onChange={(event) => setCardPoints(+event.currentTarget.value)}
              />
            </BlockWithMarginTopStyled>
            <Button
              variant="secondary"
              style={{ width: "100%", marginTop: "12px" }}
              onClick={handleAddCardToUpload}>
              Add new card to this card set
            </Button>
          </UploadCardSetFormAdditionalBlockStyled>
        )}
        <UploadCardSetFormButtonStyled type="submit" disabled={!cardSetName.trim()}>
          Upload card set
        </UploadCardSetFormButtonStyled>
      </UploadCardSetFormStyled>
    </UploadCardSetFormContainerStyled>
  );
};
