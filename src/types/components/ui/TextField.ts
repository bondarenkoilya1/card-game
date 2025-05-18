import React from "react";

type DefaultTextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = DefaultTextFieldProps & {
  labelText?: string;
  setValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
