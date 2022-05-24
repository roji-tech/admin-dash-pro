import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      state={{
        prevPath: location.pathname,
      }}
    />
  );
};

// export default requireAuth;
