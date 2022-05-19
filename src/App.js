import React from "react";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./components/home/AdminHome";
import List from "./components/list/List";
import Single from "./components/single/Single";
import { useContext } from "react";
import { DarkModeContext } from "./addOns/context/darkModeContext";
import "./App.css";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AdminHome />} />
            <Route index element={<AdminHome />} />
            <Route index element={<AdminHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>

            <Route path="products">
              <Route index element={<List />} />
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
