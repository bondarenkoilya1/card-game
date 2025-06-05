import { forwardRef } from "react";

import { DropdownContentStyled } from "./styled";

import { DropdownDefaultProps } from "src/types";

export const DropdownContent = forwardRef<HTMLUListElement, DropdownDefaultProps>(
  ({ children, isOpen }, ref) => {
    return (
      <DropdownContentStyled isOpen={isOpen} ref={ref}>
        {children}
      </DropdownContentStyled>
    );
  }
);
