import React from "react";

const ChargeBox = ({ name, label, placeholder }) => {
  const styles = {
    input: {
      border: "2px solid",
      borderRadius: "5px",
      padding: "10px 0",
      margin: "0 2rem",
      width: "10%",
    },
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        style={styles.input}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default ChargeBox;
