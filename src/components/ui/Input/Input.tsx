import { FC } from "react";

import { InputContainerStyled, InputLabelStyled, InputStyled } from "./styled";

import { InputProps } from "src/types";

export const Input: FC<InputProps> = ({
  id,
  labelText,
  type = "text",
  placeholder,
  value,
  setValue,
  ...attrs
}) => {
  return (
    <InputContainerStyled>
      {labelText && <InputLabelStyled htmlFor={id}>{labelText}</InputLabelStyled>}
      <InputStyled
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        {...attrs}
      />
    </InputContainerStyled>
  );
};
