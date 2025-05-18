import { FC } from "react";

import { RadioButtonListStyled } from "./styled";

import { Children } from "src/types";

// Can't make it more specified now because radio buttons have a lot unique params,
// don't want to create a huge array of objects for radio buttons.
export const RadioButtonList: FC<Children> = ({ children }) => {
  return <RadioButtonListStyled>{children}</RadioButtonListStyled>;
};
