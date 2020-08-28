import React from "react";

const InputBox = ({ label, name, type = "text", placeholder }) => {
  return (
    <div className="input__container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      ) : (
        <textarea
          id={name}
          name={name}
          rows={5}
          cols={5}
          className="input"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputBox;
