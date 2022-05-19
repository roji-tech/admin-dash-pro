import React, { useEffect } from "react";
import "./list.css";
import Datatable from "../../addOns/datatable/Datatable";
import fetchData from "../../DataFetch";

const List = () => {
  let url = "";

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable /> list
      </div>
    </div>
  );
};

export default List;
