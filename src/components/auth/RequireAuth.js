import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  const logginIn = () => {
    auth.login();
  };

  useEffect(() => {
    const u = localStorage.getItem("user") === "true";
    console.log("this UUUU is" + "" + u);
    if (u) {
      logginIn();
      console.log(`user is ${auth.user}`);
      console.log(`app2 is ${auth.user}`);
    }
  }, []);

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
