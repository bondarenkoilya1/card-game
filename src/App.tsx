import { Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "src/styled";

import "./prototypes";

/* Card set – All cards available in the game for a faction.
   Hand – The specific set of cards a player builds before a match.
   Hand – The cards a player currently holds in a round. */
export const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Outlet />
    </>
  );
};
