import { Children } from "src/types";

export type DropdownProps = Children & {
  buttonText: string;
};

export type DropdownButtonProps = Children & {
  isOpen: boolean;
};

export type DropdownItemProps = Children & {
  onClick?: () => void;
};
