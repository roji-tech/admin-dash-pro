import React from "react";

import Datatable from "../../addOns/datatable/Datatable";
import "./products.css";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // const url = "https://fakerapi.it/api/v1/products?_quantity=15";

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setProducts(() => response.data.data);
  //   });
  // }, [url]);

  return (
    <div>
      <div className="list">
        <div className="listContainer">
          <ol>
            {/* {products.map((user) => (
              <li key={user.id}>
                {JSON.stringify(user)}
                {user.id} === {user.firstname}---
                {user.lastname}
              </li>
            ))} */}
          </ol>
          <Datatable />
          mydict is list
        </div>
      </div>
    </div>
  );
};

export default Products;
