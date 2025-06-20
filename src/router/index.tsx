import { createBrowserRouter } from "react-router-dom";

import { App } from "src/App";

import { AdminPanel, Game, Main, ManageCardSet, UploadCardSet } from "src/pages";

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
      }
    ]
  },
  {
    path: "admin-panel",
    element: <AdminPanel />,
    children: [
      { index: true, element: <ManageCardSet /> },
      { path: "upload", element: <UploadCardSet /> }
    ]
  }
]);
