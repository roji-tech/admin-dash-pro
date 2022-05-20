import React from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userColumns, productColumns } from "./UserDatatablesource";

const Datatable = ({ rows }) => {
  
  const location = useLocation();

  
  const handleRows = (location.pathname === "/users") ? userRows : productRows;
  
  const [data, setData] = useState([]);

  
  // const [url, setUrl] = useState("");

  // if (location.pathname == "/users") {
  //   setUrl("https://fakerapi.it/api/v1/persons?_quantity=15");
  // }
  // if (location.pathname == "/users/clients") {
  //   setUrl("https://fakerapi.it/api/v1/companies?_quantity=1");
  // }
  // if (location.pathname == "/products") {
  //   setUrl("https://fakerapi.it/api/v1/products?_quantity=1");
  // }

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleColumns = (location.pathname === "/users") ? userColumns : productColumns;

  useEffect(() => {
    setData(() => rows);
  }, []);

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link
  //             to="/users/test"
  //             style={{
  //               textDecoration: "none",
  //             }}
  //           >
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  // ======================================
  //    RETURN columns.concat(actionColumn)
  // ======================================

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={handleColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
