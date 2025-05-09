import React, { useState } from "react";

import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
  RadioButtonStyled,
  UploadCardSetFormAdditionalBlockStyled,
  UploadCardSetFormContainerStyled,
  UploadCardSetFormMainBlockStyled,
  UploadCardSetFormOptionBlockStyled,
  UploadCardSetFormRadioBlock,
  UploadCardSetFormStyled,
  UploadCardSetFormTextStyled,
  UploadCardSetFormTitleStyled
} from "./styled";

import { CARD_TYPES } from "src/constants";

import { CardType } from "src/types";

type AnswerType = "yes" | "no";

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
        <UploadCardSetFormMainBlockStyled>
          <InputContainerStyled style={{ marginTop: "20px" }}>
            <InputLabelStyled htmlFor="card-set-name__input">Card set name</InputLabelStyled>
            <InputStyled type="text" id="card-set-name__input" placeholder="Chemicals" />
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
                    checked={hasCardsOnStart}
                    onChange={handleSetHasCardsOnStart}
                  />
                </InputContainerStyled>
              ))}
            </UploadCardSetFormRadioBlock>
          </UploadCardSetFormOptionBlockStyled>
        </UploadCardSetFormMainBlockStyled>

        {hasCardsOnStart && (
          <UploadCardSetFormAdditionalBlockStyled>
            <UploadCardSetFormTextStyled>
              I want to add a card with the following properties:
            </UploadCardSetFormTextStyled>
            <InputContainerStyled style={{ marginTop: "20px" }}>
              <InputLabelStyled htmlFor="card-name__input">Card name</InputLabelStyled>
              <InputStyled type="text" id="card-name__input" placeholder="Zink" />
            </InputContainerStyled>
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
            <InputContainerStyled style={{ marginTop: "20px" }}>
              <InputLabelStyled htmlFor="card-name__input">Card points</InputLabelStyled>
              <InputStyled type="text" id="card-name__input" placeholder="6" />
            </InputContainerStyled>
          </UploadCardSetFormAdditionalBlockStyled>
        )}
      </UploadCardSetFormStyled>
    </UploadCardSetFormContainerStyled>
  );
};
