import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const LandingPage = React.lazy(() => import("./views/LandingPage"));
const Login = React.lazy(() => import("./views/Login"));
const Creator = React.lazy(() => import("./views/Creator"));

const routes = (user) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
      {
        path: "/creator",
        element: user ? <Navigate to="/login" /> : <Creator />,
      },
      { path: "/", element: <LandingPage /> },
    ],
  },
];

export default routes;
