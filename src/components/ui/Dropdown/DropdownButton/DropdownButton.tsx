import { FC } from "react";

import { DropdownButtonStyled } from "./styled";

import { DropdownButtonProps } from "src/types";

export const DropdownButton: FC<DropdownButtonProps> = ({ children, isOpen }) => {
  return (
    <DropdownButtonStyled variant="secondary">
      {children} <span style={{ marginLeft: "20px" }}>{isOpen ? "↑" : "↓"}</span>
    </DropdownButtonStyled>
  );
};
