import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedOutUser = () => {
  const user = useSelector((users) => users.loginSlice.login);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default LoggedOutUser;
