import React from "react";

const TableHeader = ({ station }) => {
  let header = Object.keys(station[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export default TableHeader;
