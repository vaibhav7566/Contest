import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../Layouts/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import HomeLayout from "../Layouts/HomeLayout";
import PublicRoute from "../components/PublicRoute";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute/>,
      children: [
        {
            path: "",
            element: <AuthLayout />
        }
      ]
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Approuter;
