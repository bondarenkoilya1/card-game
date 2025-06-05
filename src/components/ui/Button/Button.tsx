import { forwardRef } from "react";
import { IconType } from "react-icons";

import { ButtonStyled, LeftIconStyled } from "./styled";

import { ButtonProps, JSXElement } from "src/types";

/* The task is not so complicated to create new files.
   I'll do different button variants in one file for now */

// Currently it's react18, so I use forwardRef
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, type = "button", variant = "primary", hasIcon, icon, onClick, ...attrs },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        className={className}
        type={type}
        variant={variant}
        onClick={onClick}
        {...attrs}>
        {hasIcon === "onLeft" && icon && renderLeftIcon(icon)}
        {children}
      </ButtonStyled>
    );
  }
);

// I declare functions like this to be able to call them above
function renderLeftIcon(icon: IconType): JSXElement {
  const Icon = icon;

  return (
    <LeftIconStyled>
      <Icon />
    </LeftIconStyled>
  );
}
