import React from "react";
import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const location = useLocation();

  // controlla anche se il token è scaduto

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
