import React from "react";
import InputBox from "./InputBox";
const AddStation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {};
    for (let element of form.elements) {
      if (element.tagName === "BUTTON") {
        continue;
      }
      data[element.name] = element.value;
    }
    console.log(data);
  };

  return (
    <div className="main-content">
      <form className="form__container" onSubmit={handleSubmit}>
        <InputBox name="manager-name" label="Manager name" />
        <InputBox name="shop-name" label="Shop Name" />
        <InputBox name="m-number" label="Mobile Number" />
        <InputBox name="l-number" label="Landline Number" />
        <InputBox name="email" label="Email Id" type="email" />
        <InputBox name="t-business" label="Type of business" />
        <InputBox name="carpet-area" label="Carpet area" />
        <InputBox name="t-water" label="Type of water" />
        <InputBox name="address" label="Address" type="textarea" />
        <InputBox name="area" label="Area" />
        <InputBox name="state" label="State" />
        <InputBox name="city" label="City" />
        <InputBox name="pin-code" label="Pin Code" />
      </form>
    </div>
  );
};

export default AddStation;
