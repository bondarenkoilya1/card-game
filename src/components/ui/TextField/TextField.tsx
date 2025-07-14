import { FC } from "react";

import { ContainerStyled, LabelStyled, TextFieldStyled } from "./styled";

import { TextFieldProps } from "./types";

export const TextField: FC<TextFieldProps> = ({
  id,
  labelText,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  ...attrs
}) => {
  return (
    <ContainerStyled className={className}>
      {labelText && <LabelStyled htmlFor={id}>{labelText}</LabelStyled>}
      <TextFieldStyled
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...attrs}
      />
    </ContainerStyled>
  );
};
