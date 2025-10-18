import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./views/LandingPage";
import PlansPage from "./views/PlansPage";
import SummaryPage from "./views/SummaryPage";

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
        path: "/summary",
        element: <SummaryPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
