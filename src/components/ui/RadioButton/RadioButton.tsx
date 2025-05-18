import { FC } from "react";

import { RadioButtonContainerStyled, RadioButtonLabelStyled, RadioButtonStyled } from "./styled";

import { RadioButtonProps } from "src/types";

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  labelText,
  name,
  value,
  isChecked,
  onChange,
  ...attrs
}) => {
  return (
    <RadioButtonContainerStyled>
      <RadioButtonLabelStyled htmlFor={id}>{labelText}</RadioButtonLabelStyled>
      <RadioButtonStyled
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={isChecked}
        onChange={onChange}
        {...attrs}
      />
    </RadioButtonContainerStyled>
  );
};

//  <InputContainerStyled key={cardType}>
// //                     <InputLabelStyled htmlFor={`card-type__radio--${cardType}`}>
// //                       {cardType.toCapitalize()}
// //                     </InputLabelStyled>
// //                     <RadioButtonStyled
// //                       type="radio"
// //                       name="cardType"
// //                       value={cardType}
// //                       id={`card-type__radio--${cardType}`}
// //                       checked={selectedCardType === cardType}
// //                       onChange={handleSetSelectedCardType}
// //                     />
// //                   </InputContainerStyled>

//  <UploadCardSetFormRadioBlock
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: "24px",
//                   marginTop: "12px"
//                 }}>
//                 {CARD_TYPES.map((cardType) => (
//
//                 ))}
//               </UploadCardSetFormRadioBlock>
