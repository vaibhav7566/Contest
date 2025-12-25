import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const PublicRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (user) {
    return navigate("/home");
  }
  return <Outlet />;
};

export default PublicRoute;
