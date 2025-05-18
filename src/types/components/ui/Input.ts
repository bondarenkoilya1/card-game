import React from "react";

type DefaultInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = DefaultInputProps & {
  labelText?: string;
  setValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
