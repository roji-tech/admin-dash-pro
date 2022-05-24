import React, { createContext, useContext, useReducer, useEffect } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_MODE = {
  darkMode: false,
};
// localStorage.getItem("dark") === "true" ||
export const DarkModeContext = createContext(INITIAL_MODE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_MODE);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(state));
    console.log("MyMode is  " + JSON.stringify(state));
  }, [state]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const darkFunc = () => {
  return useContext(DarkModeContext);
};
