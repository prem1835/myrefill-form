import React from "react";

const TableData = ({ station }) => {
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

export default TableData;
