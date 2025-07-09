import { FC, useEffect, useRef, useState } from "react";

import { DropdownButtonStyled, DropdownStyled } from "./styled";

import { DropdownContent } from "src/components";

import { DropdownProps } from "src/types";

export const Dropdown: FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        setIsOpen(false);
    };

    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <DropdownStyled ref={dropdownRef}>
      <DropdownButtonStyled variant="secondary" isOpen={isOpen} onClick={toggleDropdown}>
        {buttonText}
      </DropdownButtonStyled>
      <DropdownContent isOpen={isOpen}>{children}</DropdownContent>
    </DropdownStyled>
  );
};
