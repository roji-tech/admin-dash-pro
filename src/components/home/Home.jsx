import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

// CSS
import "./home.css";

const Home = () => {
  const location = useLocation();

  return (
    <div className="home">
      <div>{location.pathname !== "/login" && <Sidebar />}</div>
      <div className="homeContainer">
        {location.pathname !== "/login" && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
