import { FC } from "react";

import { ContainerStyled, LabelStyled, RadioButtonStyled } from "./styled";

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
    <ContainerStyled>
      <LabelStyled htmlFor={id}>{labelText}</LabelStyled>
      <RadioButtonStyled
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={isChecked}
        onChange={onChange}
        {...attrs}
      />
    </ContainerStyled>
  );
};
