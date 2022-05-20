import React, { useEffect, useState } from "react";

const [users, setUsers] = useState([]);

const [products, setProducts] = useState([]);

const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

useEffect(() => {
  axios.get(url).then((response) => {
    setUsers(() => response.data.data);
  });
}, [url]);

// import React, { useEffect, useState } from "react";
// import "./list.css";
// import axios from "axios";

// import Datatable from "../../addOns/datatable/Datatable";

// const List = (url) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setUsers(() => response.data.data);
//     });
//   }, [url]);

//   return (
//     <div className="list">
//       <div className="listContainer">
//         <ol>
//           {users.map((user) => (
//             <li key={user.id}>
//               {JSON.stringify(user)}
//               {user.id} === {user.firstname}---
//               {user.lastname}
//             </li>
//           ))}
//         </ol>
//         <Datatable userRows={} />
//         mydict is list
//       </div>
//     </div>
//   );
// };

// export default List;

// // if (location.pathname == "/users") {
// //   setUrl(() => "https://fakerapi.it/api/v1/persons?_quantity=10");
// // }
// // if (location.pathname == "/users/team") {
// //   setUrl(() => "https://fakerapi.it/api/v1/persons?_quantity=1");
// // }
// // if (location.pathname == "/users/clients") {
// //   setUrl(() => "https://fakerapi.it/api/v1/companies?_quantity=15");
// // }
// // if (location.pathname == "/users/client") {
// //   setUrl(() => "https://fakerapi.it/api/v1/companies?_quantity=1");
// // }
// // if (location.pathname == "/products") {
// //   setUrl(() => "https://fakerapi.it/api/v1/products?_quantity=15");
// // }
