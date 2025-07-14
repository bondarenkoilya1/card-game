import { FC } from "react";

import { DropdownContentStyled } from "./styled";

import { DropdownDefaultProps } from "../types";

export const DropdownContent: FC<DropdownDefaultProps> = ({ children, isOpen }) => (
  <DropdownContentStyled isOpen={isOpen}>{children}</DropdownContentStyled>
);
