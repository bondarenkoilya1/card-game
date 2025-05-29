import { FC } from "react";

import { TextFieldContainerStyled, TextFieldLabelStyled, TextFieldStyled } from "./styled";

import { TextFieldProps } from "src/types";

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
    <TextFieldContainerStyled className={className}>
      {labelText && <TextFieldLabelStyled htmlFor={id}>{labelText}</TextFieldLabelStyled>}
      <TextFieldStyled
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...attrs}
      />
    </TextFieldContainerStyled>
  );
};
