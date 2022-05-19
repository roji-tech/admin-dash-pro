import React from "react";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Image",
    width: 90,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.image}</div>;
    },
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithFullname">
          {params.row.firstname}
          {params.row.lastname}
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
  //  {
  //    field: "website",
  //    headerName: "Website",
  //    width: 100,
  //  },
  {
    field: "age",
    headerName: "Age",
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
      return <div className="cellWithImg">{params.row.image}</div>;
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
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "gender",
    headerName: "gender",
    width: 100,
  },

  {
    field: "age",
    headerName: "Age",
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
// export default { userColumns, productColumns };
//temporary data
// {
//   id: 1,
//   username: "Snow",
//   img:
//     "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   status: "active",
//   email: "1snow@gmail.com",
//   age: 35,
// },
