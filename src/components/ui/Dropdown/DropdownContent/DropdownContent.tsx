import { FC } from "react";

import { DropdownContentStyled } from "./styled";

import { DropdownDefaultProps } from "src/types";

export const DropdownContent: FC<DropdownDefaultProps> = ({ children, isOpen }) => {
  return <DropdownContentStyled isOpen={isOpen}>{children}</DropdownContentStyled>;
};
