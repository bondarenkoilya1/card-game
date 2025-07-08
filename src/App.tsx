import { Link, Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { ContainerStyled, GlobalStyle } from "src/styled";

import "./prototypes";

/* Card set – All cards available in the game for a faction.
   Deck – The specific set of cards a player builds before a match.
   Hand – The cards a player currently holds in a round. */
export const App = () => (
  <>
    <Global styles={GlobalStyle} />
    {renderHeader()}
    <Outlet />
  </>
);

// TODO: Fast navigation during development. Will be killed
function renderHeader() {
  return (
    <header
      style={{
        color: "#000",
        backgroundColor: "#d3d3d3",
        textAlign: "center",
        padding: "10px 0",
        borderBottom: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
      <ContainerStyled>
        <span
          style={{
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "36px"
          }}>
          Card game
        </span>
        <nav style={{ marginTop: "10px" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center"
            }}>
            <li style={{ marginRight: "30px" }}>
              <Link to="/">Back home</Link>
            </li>
            <li style={{ marginRight: "30px" }}>
              <Link to="/play">Play</Link>
            </li>
            <li style={{ marginRight: "30px" }}>
              <Link to="/pick-set">Pick set</Link>
            </li>
            <li>
              <Link to="/admin-panel">Admin panel</Link>
            </li>
          </ul>
        </nav>
      </ContainerStyled>
    </header>
  );
}
