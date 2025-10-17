import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./views/LandingPage";
import PlansPage from "./views/PlansPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
