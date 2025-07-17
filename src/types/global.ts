import React, { ReactNode } from "react";

import { CSSObject } from "@emotion/react";

export type Children = {
  children: ReactNode;
};

export type CSS = CSSObject;

export type JSXElement = React.JSX.Element;

export type ServerErrorProps = {
  message: string;
};

declare global {
  interface String {
    toCapitalize(): string;
  }
}

export type ParticipantType = "player" | "bot";
export type SortVariants = "normal" | "reverse";
export type ScoreProp = {
  score: number;
};
export type OutsideStylesProp = {
  outsideStyles?: CSS;
};
