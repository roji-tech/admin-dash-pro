import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import Widget from "../../addOns/widget/Widget.jsx";
// import Featured from "../../components/featured/Featured";
import Chart from "../../addOns/chart/Chart.jsx";
import Table from "../../addOns/table/Table"

import "./adminhome.css";

const AdminHome = () => {
  return (
    <div className="adminHomeContainer">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
      </div>
      <div className="charts">
          <Chart title="Last 6 Months (Revenue)" />
        </div>
      <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
    </div>
  );
};

export default AdminHome;
