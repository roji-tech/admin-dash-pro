import React from "react";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.image} alt={params.row.image} />
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithFullname">
          {`${params.row.firstname}  ${params.row.lastname}`}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "gender",
    headerName: "gender",
    width: 100,
  },
  //  {
  //    field: "address",
  //    headerName: "Address",
  //    width: 100,
  //  },

  {
    field: "website",
    headerName: "Website",
    width: 100,
  },
  {
    field: "birthday",
    headerName: "Birthday",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.birthday}</div>;
    },
  },
];

// ===============================
// ===============================
// ===============================
// ===============================

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.image} alt={params.row.image} />
        </div>
      );
    },
  },

  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "collection",
    headerName: "Collection",
    width: 230,
  },

  {
    field: "net_price",
    headerName: "Net Price",
    width: 100,
  },
  {
    field: "taxes",
    headerName: "Taxes",
    width: 100,
  },
];
