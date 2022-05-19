import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./list.css";
// import Datatable from "../../addOns/datatable/Datatable";
import fetchData from "../../DataFetch";

const List = () => {
  const [users, setUsers] = useState(null);

  const location = useLocation();

  let url = "https://fakerapi.it/api/v1/persons?_quantity=15";

  useEffect(() => {
    const response = fetchData(url);
    response.then((response) => {
      setUsers(response);
      console.log(response);
    });
    // setUsers(response);
  }, [url]);

  return (
    <div className="list">
      <div className="listContainer">
        <pre>
          <code>{JSON.stringify(users, null, 4)}</code>
        </pre>
        {/* <Datatable />  */}list
      </div>
    </div>
  );
};

export default List;
