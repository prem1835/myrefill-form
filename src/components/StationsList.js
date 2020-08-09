import React, { useState } from "react";

const Stations = () => {
  const [station, setStation] = useState([
    { No: 1, Name: "Burger King", Address: "No 201 arco road kk nagar" },
    { No: 2, Name: "Burger King", Address: "No 201 arco road kk nagar" },
  ]);

  const renderTableData = () => {
    return station.map((shop) => {
      const { No, Name, Address } = shop; //destructuring
      return (
        <tr key={No}>
          <td>{No}</td>
          <td>{Name}</td>
          <td>{Address}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(station[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <div className="main-content">
      <table className="stations">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default Stations;
