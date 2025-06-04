import { FC, useEffect, useRef, useState } from "react";

import { DropdownStyled } from "./styled";

import { DropdownButton, DropdownContent } from "src/components";

import { DropdownProps } from "src/types";

export const Dropdown: FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, [dropdownRef]);

  return (
    <DropdownStyled ref={dropdownRef}>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        {buttonText}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </DropdownStyled>
  );
};
