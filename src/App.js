import React, { useContext, useEffect } from "react";

import Home from "./components/homes/Home";
import Login from "./components/auth/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./components/homes/AdminHome";
import Products from "./components/products/Products";
import Single from "./components/single/Single";
import { darkFunc } from "./addOns/context/darkModeContext";
import Users from "./components/users/Users";
import { RequireAuth } from "./components/auth/RequireAuth";
import { useAuth } from "./components/auth/Auth";

// fetch

import "./App.css";

function App() {
  // const { darkMode } = useContext(DarkModeContext);
  const { darkMode, dispatch } = darkFunc();
  // const auth = useAuth();

  // const localStorageMode = () => dispatch({ type: "DARK" });

  // useEffect(() => {
  //   if (window) {
  //     // const dark = localStorage.getItem("dark") === "true";
  //     const u = localStorage.getItem("user") === "true";
  //     // if (dark) {
  //     //   localStorageMode();
  //     // }
  //     if (u) {
  //       auth.login();
  //     }
  //   }
  // }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/login"
            element={
              // <RequireAuth>
                <Login />
              // </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>

            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
