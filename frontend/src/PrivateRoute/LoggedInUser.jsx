import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { useSelector } from "react-redux";

const LoggedInUser = () => {
  const user = useSelector((user) => user.loginSlice.login);
  return user ? <Outlet /> : <Login />;
};

export default LoggedInUser;
