import React, { useState } from "react";

import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
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

import { Button } from "src/components";
import { PreviewCardsToUpload } from "src/components/CardSet/UploadCardSetForm/PreviewCardsToUpload";

import { CardProps, CardSets, CardType } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

type AnswerType = "yes" | "no";

const answers: AnswerType[] = ["yes", "no"];

const UploadCardSetFormButtonStyled = styled(Button)(UploadCardSetFormButtonStyles);

const cardsToUpload: CardProps[] = [
  {
    name: "Zinc",
    type: "close",
    points: 5
  },
  {
    name: "Aluminium",
    type: "close",
    points: 8
  },
  {
    name: "Zinc",
    type: "close",
    points: 5
  },
  {
    name: "Aluminium",
    type: "close",
    points: 8
  },
  {
    name: "Zinc",
    type: "close",
    points: 5
  },
  {
    name: "Aluminium",
    type: "close",
    points: 8
  },
  {
    name: "Zinc",
    type: "close",
    points: 5
  },
  {
    name: "Aluminium",
    type: "close",
    points: 8
  },
  {
    name: "Aluminium",
    type: "close",
    points: 8
  }
];

export const UploadCardSetForm = () => {
  const [hasCardsOnStart, setHasCardsOnStart] = useState(true);
  const [selectedCardType, setSelectedCardType] = useState<CardType>("close");
  const [cardSetName, setCardSetName] = useState<string>("");

  const handleSetHasCardsOnStart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnStart(event.currentTarget.value === "yes");

  const handleSetSelectedCardType = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedCardType(event.currentTarget.value as CardType);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cardSetName) throw new Error("Card set name is required.");

    const dataToSend = {
      cardSetName: cardSetName,
      cards: []
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
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <UploadCardSetFormContainerStyled>
        <UploadCardSetFormTitleStyled>Upload card set</UploadCardSetFormTitleStyled>
        <UploadCardSetFormStyled onSubmit={handleSubmitForm}>
          <UploadCardSetFormMainBlockStyled>
            <InputContainerStyled style={{ marginTop: "20px" }}>
              <InputLabelStyled htmlFor="card-set-name__input">Card set name</InputLabelStyled>
              <InputStyled
                type="text"
                id="card-set-name__input"
                placeholder="Chemicals"
                value={cardSetName}
                onChange={(event) => setCardSetName(event.currentTarget.value)}
              />
            </InputContainerStyled>
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

          {/*{hasCardsOnStart && (*/}
          {/*  <UploadCardSetFormAdditionalBlockStyled>*/}
          {/*    <UploadCardSetFormTextStyled style={{ textAlign: "center" }}>*/}
          {/*      I want to add a card with the following properties:*/}
          {/*    </UploadCardSetFormTextStyled>*/}
          {/*    <InputContainerStyled style={{ marginTop: "20px" }}>*/}
          {/*      <InputLabelStyled htmlFor="card-name__input">Card name</InputLabelStyled>*/}
          {/*      <InputStyled type="text" id="card-name__input" placeholder="Zinc" />*/}
          {/*    </InputContainerStyled>*/}
          {/*    <UploadCardSetFormTextStyled*/}
          {/*      style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>*/}
          {/*      Card type*/}
          {/*    </UploadCardSetFormTextStyled>*/}
          {/*    <UploadCardSetFormRadioBlock*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        gap: "24px",*/}
          {/*        marginTop: "12px"*/}
          {/*      }}>*/}
          {/*      {CARD_TYPES.map((cardType) => (*/}
          {/*        <InputContainerStyled key={cardType}>*/}
          {/*          <InputLabelStyled htmlFor={`card-type__radio--${cardType}`}>*/}
          {/*            {cardType.toCapitalize()}*/}
          {/*          </InputLabelStyled>*/}
          {/*          <RadioButtonStyled*/}
          {/*            type="radio"*/}
          {/*            name="cardType"*/}
          {/*            value={cardType}*/}
          {/*            id={`card-type__radio--${cardType}`}*/}
          {/*            checked={selectedCardType === cardType}*/}
          {/*            onChange={handleSetSelectedCardType}*/}
          {/*          />*/}
          {/*        </InputContainerStyled>*/}
          {/*      ))}*/}
          {/*    </UploadCardSetFormRadioBlock>*/}
          {/*    <InputContainerStyled style={{ marginTop: "20px" }}>*/}
          {/*      <InputLabelStyled htmlFor="card-name__input">Card points</InputLabelStyled>*/}
          {/*      <InputStyled type="text" id="card-name__input" placeholder="6" />*/}
          {/*    </InputContainerStyled>*/}
          {/*    <Button variant="secondary" style={{ width: "100%", marginTop: "12px" }}>*/}
          {/*      Add new card to this card set*/}
          {/*    </Button>*/}
          {/*  </UploadCardSetFormAdditionalBlockStyled>*/}
          {/*)}*/}
          <UploadCardSetFormButtonStyled type="submit" disabled={!cardSetName.trim()}>
            Upload card set
          </UploadCardSetFormButtonStyled>
        </UploadCardSetFormStyled>
      </UploadCardSetFormContainerStyled>
      <PreviewCardsToUpload cardsToUpload={cardsToUpload} />
    </div>
  );
};
