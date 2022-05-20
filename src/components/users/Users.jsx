import React from "react";
// import axios from "axios";

import Datatable from "../../addOns/datatable/Datatable";

import "./users.css";

const Users = () => {
  // const [users, setUsers] = useState([]);

  // const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setUsers(() => response.data.data);
  //   });
  // }, [url]);

  return (
    <div>
      <div className="list">
        <div className="listContainer">
          <ol>
            {/* {users.map((user) => (
              <li key={user.id}>
                {JSON.stringify(user)}
                {user.id} === {user.firstname}---
                {user.lastname}
              </li>
            ))} */}
            <Datatable />
          </ol>
          mydict is list
        </div>
      </div>
    </div>
  );
};

export default Users;
