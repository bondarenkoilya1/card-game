import React from "react";

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = DefaultButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
  hasIcon?: "onLeft" | "onRight";
};
