import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../Layouts/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import HomeLayout from "../Layouts/HomeLayout";
import PublicRoute from "../components/PublicRoute";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Users from "../pages/Users";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            { path: "products", element: <Products /> },
            { path: "users", element: <Users /> },
            { path: "", element: <Home /> },

          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Approuter;
