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
