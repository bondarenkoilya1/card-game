import { FC } from "react";

import { Children } from "src/types";

export const DropdownContent: FC<Children> = ({ children }) => {
  return <div>{children}</div>;
};
