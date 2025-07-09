import { createBrowserRouter } from "react-router-dom";

import { App } from "src/App";

import { Game, Main, ManageDeck, PickSet } from "src/pages";

// TODO: Here will be a few more options such as errorElement, loader
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "play",
        element: <Game />
      },
      {
        path: "pick-set",
        element: <PickSet />
      },
      {
        path: "pick-set/:cardSetSlug",
        element: <ManageDeck />
      }
    ]
  }
  // Is not ready to be used
  // {
  //   path: "admin-panel",
  //   element: <AdminPanel />,
  //   children: [
  //     { index: true, element: <ManageCardSet /> },
  //     { path: "upload", element: <UploadCardSet /> }
  //   ]
  // }
]);
