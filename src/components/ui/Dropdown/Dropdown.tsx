import { FC, useEffect, useRef, useState } from "react";

import { DropdownButtonStyled, DropdownStyled } from "./styled";

import { DropdownContent } from "src/components";

import { DropdownProps } from "src/types";

export const Dropdown: FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        setIsOpen(false);
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <DropdownStyled ref={dropdownRef}>
      <DropdownButtonStyled
        variant="secondary"
        isOpen={isOpen}
        onClick={toggleDropdown}
        ref={buttonRef}>
        {buttonText}
      </DropdownButtonStyled>
      <DropdownContent isOpen={isOpen} ref={contentRef}>
        {children}
      </DropdownContent>
    </DropdownStyled>
  );
};
