import React, { ReactNode } from "react";

import { CSSObject } from "@emotion/react";

export type Children = {
  children: ReactNode;
};

export type CSS = CSSObject;

export type JSXElement = React.JSX.Element;

declare global {
  interface String {
    toCapitalize(): string;
  }
}
