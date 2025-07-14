import { Children } from "src/types";

export type DropdownProps = Children & {
  buttonText: string;
};

export type DropdownDefaultProps = Children & {
  isOpen: boolean;
};

export type DropdownItemProps = Children & {
  onClick?: () => void;
};
