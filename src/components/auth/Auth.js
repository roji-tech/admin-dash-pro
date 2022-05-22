import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const login = () => {
    console.log(`=login--==sad==== ${user}`);
    setUser(() => true);
    console.log(`=login--==sad==== ${user}`);
  };
  const logout = () => {
    setUser(() => false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
