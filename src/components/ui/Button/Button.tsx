import { FC } from "react";

import { ButtonStyled } from "./styled";

import { ButtonProps } from "./types";

/* The task is not so complicated to create new files.
   I'll do different button variants in one file for now */
export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = "button",
  variant = "primary",
  hasIcon,
  onClick,
  ...attrs
}) => {
  return (
    <ButtonStyled className={className} type={type} variant={variant} onClick={onClick} {...attrs}>
      {/*{hasIcon === "onLeft" && icon && renderLeftIcon(icon)}*/}
      {children}
    </ButtonStyled>
  );
};

// I declare functions like this to be able to call them above
// function renderLeftIcon(icon: IconType): JSXElement {
//   const Icon = icon;
//
//   return (
//     <LeftIconStyled>
//       <Icon />
//     </LeftIconStyled>
//   );
// }
