import { Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "src/styled";

import { Header } from "src/layout";

import "./prototypes";

/* Card set – All cards available in the game for a faction.
   Deck – The specific set of cards a player builds before a match.
   Hand – The cards a player currently holds in a round. */
export const App = () => (
  <>
    <Global styles={GlobalStyle} />
    <Header />
    <Outlet />
  </>
);
