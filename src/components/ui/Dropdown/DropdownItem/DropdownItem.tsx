import { FC } from "react";

import { DropdownItemStyled } from "./styled";

import { DropdownItemProps } from "../types";

export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick }) => {
  return <DropdownItemStyled onClick={onClick}>{children}</DropdownItemStyled>;
};
