import React, { useState } from "react";

import {
  BlockWithMarginTopStyled,
  InputContainerStyled,
  InputLabelStyled,
  RadioButtonStyled,
  UploadCardSetFormAdditionalBlockStyled,
  UploadCardSetFormButtonStyles,
  UploadCardSetFormContainerStyled,
  UploadCardSetFormMainBlockStyled,
  UploadCardSetFormOptionBlockStyled,
  UploadCardSetFormRadioBlock,
  UploadCardSetFormStyled,
  UploadCardSetFormTextStyled,
  UploadCardSetFormTitleStyled
} from "./styled";
import styled from "@emotion/styled";

import { CARD_TYPES } from "src/constants";

import { Button, Input } from "src/components";
import { PreviewCardsToUpload } from "src/components/CardSet/UploadCardSetForm/PreviewCardsToUpload";

import { CardProps, CardType } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

type AnswerType = "yes" | "no";

const answers: AnswerType[] = ["yes", "no"];

const UploadCardSetFormButtonStyled = styled(Button)(UploadCardSetFormButtonStyles);

export const UploadCardSetForm = () => {
  const [hasCardsOnStart, setHasCardsOnStart] = useState(true);

  const [cardSetName, setCardSetName] = useState<string>("");

  const [cardName, setCardName] = useState<string>("");
  const [selectedCardType, setSelectedCardType] = useState<CardType>("close");
  const [cardPoints, setCardPoints] = useState<number>(0);

  const [cardsToUpload, setCardsToUpload] = useState<CardProps[]>([]);

  const handleSetHasCardsOnStart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnStart(event.currentTarget.value === "yes");

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
      cards: cardsToUpload
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
      setCardsToUpload([]);
    }
  };

  const handleAddCardToUpload = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!cardName) throw new Error("Card name is required.");

    const currentCard = { name: cardName, type: selectedCardType, points: cardPoints };

    setCardsToUpload((prev) => [...prev, currentCard]);
    resetForm();
  };

  return (
    <div style={{ display: "flex" }}>
      <UploadCardSetFormContainerStyled>
        <UploadCardSetFormTitleStyled>Upload card set</UploadCardSetFormTitleStyled>
        <UploadCardSetFormStyled onSubmit={handleSubmitForm}>
          <UploadCardSetFormMainBlockStyled>
            <Input
              id="card-set-name__input"
              labelText="Card set name"
              type="text"
              placeholder="Chemicals"
              value={cardSetName}
              setValue={(event) => setCardSetName(event.currentTarget.value)}
            />
            <UploadCardSetFormOptionBlockStyled>
              <UploadCardSetFormTextStyled>
                Do you want to add some cards on start?
              </UploadCardSetFormTextStyled>
              <UploadCardSetFormRadioBlock
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  marginTop: "12px"
                }}>
                {answers.map((answer) => (
                  <InputContainerStyled key={answer}>
                    <InputLabelStyled htmlFor={`has-cards__radio--${answer}`}>
                      {answer.toCapitalize()}
                    </InputLabelStyled>
                    <RadioButtonStyled
                      type="radio"
                      name="hasCards"
                      value={answer}
                      id={`has-cards__radio--${answer}`}
                      checked={hasCardsOnStart === (answer === "yes")}
                      onChange={handleSetHasCardsOnStart}
                    />
                  </InputContainerStyled>
                ))}
              </UploadCardSetFormRadioBlock>
            </UploadCardSetFormOptionBlockStyled>
          </UploadCardSetFormMainBlockStyled>

          {hasCardsOnStart && (
            <UploadCardSetFormAdditionalBlockStyled>
              <UploadCardSetFormTextStyled style={{ textAlign: "center" }}>
                I want to add a card with the following properties:
              </UploadCardSetFormTextStyled>
              <BlockWithMarginTopStyled marginTop={20}>
                <Input
                  id="card-name__input"
                  labelText="Card name"
                  type="text"
                  placeholder="Zync"
                  value={cardName}
                  setValue={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setCardName(event.currentTarget.value)
                  }
                />
              </BlockWithMarginTopStyled>
              <UploadCardSetFormTextStyled
                style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
                Card type
              </UploadCardSetFormTextStyled>
              <UploadCardSetFormRadioBlock
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  marginTop: "12px"
                }}>
                {CARD_TYPES.map((cardType) => (
                  <InputContainerStyled key={cardType}>
                    <InputLabelStyled htmlFor={`card-type__radio--${cardType}`}>
                      {cardType.toCapitalize()}
                    </InputLabelStyled>
                    <RadioButtonStyled
                      type="radio"
                      name="cardType"
                      value={cardType}
                      id={`card-type__radio--${cardType}`}
                      checked={selectedCardType === cardType}
                      onChange={handleSetSelectedCardType}
                    />
                  </InputContainerStyled>
                ))}
              </UploadCardSetFormRadioBlock>
              <BlockWithMarginTopStyled marginTop={20}>
                <Input
                  id="card-points__input"
                  labelText="Card points"
                  type="number"
                  placeholder="6"
                  min="0"
                  value={cardPoints}
                  setValue={(event) => setCardPoints(+event.currentTarget.value)}
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
      <PreviewCardsToUpload cardsToUpload={cardsToUpload} />
    </div>
  );
};
