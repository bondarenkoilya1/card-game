import React, { useState } from "react";

import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
  RadioButtonStyled,
  UploadCardSetFormContainerStyled,
  UploadCardSetFormInitialCardBlockStyled,
  UploadCardSetFormOptionBlockStyled,
  UploadCardSetFormRadioBlock,
  UploadCardSetFormStyled,
  UploadCardSetFormTextStyled,
  UploadCardSetFormTitleStyled
} from "./styled";

import { CardType } from "src/types";

type AnswerType = "yes" | "no";

const cardTypes: CardType[] = ["close", "range", "siege"];
const answers: AnswerType[] = ["yes", "no"];

export const UploadCardSetForm = () => {
  const [hasCardsOnStart, setHasCardsOnStart] = useState(true);
  const [selectedCardType, setSelectedCardType] = useState<CardType>("close");

  const handleSetHasCardsOnStart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnStart(event.currentTarget.value === "yes");

  const handleSetSelectedCardType = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedCardType(event.currentTarget.value as CardType);

  return (
    <UploadCardSetFormContainerStyled>
      <UploadCardSetFormTitleStyled>Upload card set</UploadCardSetFormTitleStyled>
      <UploadCardSetFormStyled>
        <InputContainerStyled style={{ marginTop: "20px" }}>
          <InputLabelStyled htmlFor="card-set-name__input">Card set name</InputLabelStyled>
          <InputStyled
            type="text"
            id="card-set-name__input"
            placeholder="Chemicals"
            style={{ width: "170px" }}
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
            {answers.map((answer) => {
              // avoiding template literals here for better readability
              const answerCapitalized = answer[0].toUpperCase() + answer.slice(1);
              return (
                <InputContainerStyled>
                  <InputLabelStyled htmlFor={`has-cards__radio--${answer}`}>
                    {answerCapitalized}
                  </InputLabelStyled>
                  <RadioButtonStyled
                    type="radio"
                    name="hasCards"
                    value={answer}
                    id={`has-cards__radio--${answer}`}
                    checked={hasCardsOnStart}
                    onChange={handleSetHasCardsOnStart}
                  />
                </InputContainerStyled>
              );
            })}
          </UploadCardSetFormRadioBlock>
        </UploadCardSetFormOptionBlockStyled>

        {hasCardsOnStart && (
          <UploadCardSetFormInitialCardBlockStyled>
            I want to add a card with the following properties:
            <InputContainerStyled style={{ marginTop: "20px" }}>
              <InputLabelStyled htmlFor="card-name__input">Card name</InputLabelStyled>
              <InputStyled
                type="text"
                id="card-name__input"
                placeholder="Zink"
                style={{ width: "170px" }}
              />
            </InputContainerStyled>
            <UploadCardSetFormTextStyled style={{ marginTop: "20px" }}>
              Card type
            </UploadCardSetFormTextStyled>
            <UploadCardSetFormRadioBlock
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "12px"
              }}>
              {cardTypes.map((cardType) => {
                // avoiding template literals here for better readability
                const cardTypeCapitalized = cardType[0].toUpperCase() + cardType.slice(1);
                return (
                  <InputContainerStyled key={cardType}>
                    <InputLabelStyled htmlFor={`card-type__radio--${cardType}`}>
                      {cardTypeCapitalized}
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
                );
              })}
            </UploadCardSetFormRadioBlock>
            <InputContainerStyled style={{ marginTop: "20px" }}>
              <InputLabelStyled htmlFor="card-name__input">Card points</InputLabelStyled>
              <InputStyled
                type="text"
                id="card-name__input"
                placeholder="6"
                style={{ width: "170px" }}
              />
            </InputContainerStyled>
          </UploadCardSetFormInitialCardBlockStyled>
        )}
      </UploadCardSetFormStyled>
    </UploadCardSetFormContainerStyled>
  );
};

//name, type, points
