import { Game, Main, ManageDeck, PickSet } from "src/pages";

import { RouteProps } from "src/types";

export const ROUTES: RouteProps[] = [
  { index: true, element: <Main /> },
  { path: "play", element: <Game /> },
  { path: "pick-set", element: <PickSet /> },
  { path: "pick-set/:cardSetSlug", element: <ManageDeck /> }
];
