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

export const UploadCardSetForm = () => {
  const [hasCardsOnStart, setHasCardsOnStart] = useState(true);

  const handleSetHasCardsOnStart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnStart(event.currentTarget.value === "yes");

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
            <InputContainerStyled>
              <InputLabelStyled htmlFor="has-cards__radio--yes">Yes</InputLabelStyled>
              <RadioButtonStyled
                type="radio"
                name="hasCards"
                value="yes"
                id="has-cards__radio--yes"
                checked={hasCardsOnStart}
                onChange={handleSetHasCardsOnStart}
              />
            </InputContainerStyled>
            <InputContainerStyled>
              <InputLabelStyled htmlFor="has-cards__radio--no">No</InputLabelStyled>
              <RadioButtonStyled
                type="radio"
                name="hasCards"
                value="no"
                id="has-cards__radio--no"
                checked={!hasCardsOnStart}
                onChange={handleSetHasCardsOnStart}
              />
            </InputContainerStyled>
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
          </UploadCardSetFormInitialCardBlockStyled>
        )}
      </UploadCardSetFormStyled>
    </UploadCardSetFormContainerStyled>
  );
};

//name, type, points
