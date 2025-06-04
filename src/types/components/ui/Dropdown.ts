import { ButtonProps, Children } from "src/types";

export type DropdownProps = Children & {
  buttonText: string;
};

export type DropdownDefaultProps = Children & {
  isOpen: boolean;
};

export type DropdownButtonProps = DropdownDefaultProps & ButtonProps;

export type DropdownItemProps = Children & {
  onClick?: () => void;
};
