import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import "./list.css";
import axios from "axios";

// import Datatable from "../../addOns/datatable/Datatable";
// import fetchData from "../../DataFetch";

// const fetchData = async (url) => {
//   try {
//     const response = await axios.get(url);
//     // console.log(listData[1]);
//     console.log(response);
//     // return { listData, response };
//   } catch (error) {
//     console.log(error.response);
//   }
// };

const List = () => {
  const [users, setUsers] = useState(null);
  let url = "https://fakerapi.it/api/v1/companies?_quantity=1";

  // useEffect(() => {
  //   const response = fetchData(url);
  //   setUsers(response);
  //   console.log(response);
  //   // setUsers(response);
  // }, [url]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="list">
      <div className="listContainer">
        <ol>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ol>
        {/* <Datatable />  */}
        list
      </div>
    </div>
  );
};

export default List;

// const [url, setUrl] = useState("");

// const location = useLocation();
// if (location.pathname == "/users") {
//   setUrl("https://fakerapi.it/api/v1/persons?_quantity=15");
// }
// if (location.pathname == "/users/clients") {
//   setUrl("https://fakerapi.it/api/v1/companies?_quantity=1");
// }
// if (location.pathname == "/products") {
//   setUrl("https://fakerapi.it/api/v1/products?_quantity=1");
// }
