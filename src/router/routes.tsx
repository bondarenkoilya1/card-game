import { Game, Main, ManageDeck, PickSet } from "src/pages";

import { RouteProps } from "./types";

export const ROUTES: RouteProps[] = [
  { index: true, element: <Main /> },
  { path: "pick-set", element: <PickSet /> },
  { path: "pick-set/:cardSetSlug", element: <ManageDeck /> },
  { path: "play", element: <Game /> }
];
