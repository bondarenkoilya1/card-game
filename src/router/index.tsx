import { createBrowserRouter } from "react-router-dom";

import { App } from "src/App";

import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ROUTES.map(({ index, path, element }) => ({
      ...(index ? { index: true } : { path }),
      element
    }))
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
