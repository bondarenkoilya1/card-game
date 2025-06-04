import { FC, useState } from "react";

import { DropdownButton, DropdownContent } from "src/components";

import { DropdownProps } from "src/types";

export const Dropdown: FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <DropdownButton isOpen={isOpen}>{buttonText}</DropdownButton>
      <DropdownContent>{children}</DropdownContent>
    </>
  );
};
