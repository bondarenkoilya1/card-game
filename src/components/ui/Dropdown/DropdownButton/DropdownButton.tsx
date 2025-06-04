import { FC } from "react";

import { DropdownButtonStyled } from "./styled";

import { DropdownButtonProps } from "src/types";

export const DropdownButton: FC<DropdownButtonProps> = ({ children, isOpen, onClick }) => {
  return (
    <DropdownButtonStyled variant="secondary" isOpen={isOpen} onClick={onClick}>
      {children} <span style={{ marginLeft: "20px" }}>{isOpen ? "↑" : "↓"}</span>
    </DropdownButtonStyled>
  );
};
