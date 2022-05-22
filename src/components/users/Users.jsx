import React from "react";
// import axios from "axios";

import Datatable from "../../addOns/DataListing/Datatable";

import "./users.css";

const Users = () => {
  return (
    <div>
      <div className="list">
        <div className="listContainer">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Users;
