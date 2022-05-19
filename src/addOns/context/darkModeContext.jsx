import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_MODE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_MODE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_MODE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
