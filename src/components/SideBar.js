import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="SideBar">
      <Link to="/" className="btn">
        Add Station
      </Link>
      <Link to="/stations" className="btn">
        Stations
      </Link>
    </nav>
  );
};

export default SideBar;
