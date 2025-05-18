import React from "react";

type DefaultTextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = DefaultTextFieldProps & {
  labelText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
