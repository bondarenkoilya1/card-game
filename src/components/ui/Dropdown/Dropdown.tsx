import { FC, useState } from "react";

import { DropdownStyled } from "./styled";

import { DropdownButton, DropdownContent } from "src/components";

import { DropdownProps } from "src/types";

export const Dropdown: FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  return (
    <DropdownStyled>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        {buttonText}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </DropdownStyled>
  );
};
