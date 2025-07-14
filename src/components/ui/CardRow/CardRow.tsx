import { FC } from "react";

import { CardRowStyled } from "./styled";

import { CardRowProps } from "./types";

/* TODO: Return here later when refactor styling system.
    It's better approach, than "classnames" for being able to style component outside with style attribute */
export const CardRow: FC<CardRowProps> = ({ outsideStyles, children, type }) => {
  return (
    <CardRowStyled type={type} css={outsideStyles}>
      {children}
    </CardRowStyled>
  );
};
