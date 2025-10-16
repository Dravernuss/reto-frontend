import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./views/LandingPage";

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
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
