import React from "react";

const BussinessHourBox = ({ label, name, placeholder }) => {
  return (
    <div className="hour__container">
      <input type="checkbox" name={name} id={name} className="aa" />
      <label htmlFor={name} style={{ marginLeft: "10px", fontSize: "1.2rem" }}>
        {label}
      </label>
      <div className="hour-input__box">
        <input
          type="text"
          name={name}
          placeholde={placeholder}
          className="hour__input"
        />
        <input
          type="text"
          name={name}
          placeholde={placeholder}
          className="hour__input"
        />
        to
        <input
          type="text"
          name={name}
          placeholde={placeholder}
          className="hour__input"
        />
        <input
          type="text"
          name={name}
          placeholde={placeholder}
          className="hour__input"
        />
      </div>
    </div>
  );
};

export default BussinessHourBox;
