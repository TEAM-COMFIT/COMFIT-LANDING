import { createBrowserRouter } from "react-router-dom";

import { publicRoutes } from "./public-routes";
import { RootLayout } from "./root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [...publicRoutes],
  },
]);
