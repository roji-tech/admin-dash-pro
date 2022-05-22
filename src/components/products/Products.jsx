import React from "react";

import Datatable from "../../addOns/DataListing/Datatable";
import "./products.css";

const Products = () => {
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

export default Products;
