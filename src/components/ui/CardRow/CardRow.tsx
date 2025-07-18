import { FC } from "react";

import { CardRowStyled } from "./styled";

import { CardRowProps } from "./types";

export const CardRow: FC<CardRowProps> = ({ outsideStyles, children, type }) => {
  return (
    <CardRowStyled type={type} css={outsideStyles}>
      {children}
    </CardRowStyled>
  );
};
