import React, { useState } from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

const Stations = () => {
  const [station, setStation] = useState([
    { No: 1, Name: "Burger King", Address: "No 201 arco road kk nagar" },
    { No: 2, Name: "Burger King", Address: "No 201 arco road kk nagar" },
  ]);

  return (
    <div className="main-content">
      <table className="stations">
        <tbody>
          <tr>{<TableHeader station={station} />}</tr>
          {<TableData station={station} />}
        </tbody>
      </table>
    </div>
  );
};

export default Stations;
