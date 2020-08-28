import React from "react";
import InputBox from "./common/InputBox";
import BussinessHourBox from "./common/BussinessHourBox";
import ChargeBox from "./common/ChargeBox";
import MyMapComponent from "./common/Google";

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
        <h3 style={{ textAlign: "center", margin: "3rem 0" }}>
          Business Hours
        </h3>
        <BussinessHourBox name={"monday"} label={"Monday"} />
        <BussinessHourBox name={"tuesday"} label={"Tuesday"} />
        <BussinessHourBox name={"wednesday"} label={"Wednesday"} />
        <BussinessHourBox name={"thursday"} label={"Thursday"} />
        <BussinessHourBox name={"friday"} label={"Friday"} />
        <BussinessHourBox name={"saturday"} label={"Saturday"} />
        <BussinessHourBox name={"sunday"} label={"Sunday"} />
        <h3 style={{ textAlign: "center", margin: "3rem 0" }}>Locate in map</h3>
        <MyMapComponent
          isMarkerShown={false}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div className="chargeBox">
          <ChargeBox name="chargesFor1" label="Charges for 1 litre" />
          <ChargeBox name="cafeShare" label="Cafe Share" />
          <ChargeBox name="ourShare" label="our Share" />
        </div>
        <div className="chargeBox">
          <ChargeBox name="chargesFor500" label="Charges for 500ml" />
          <ChargeBox name="cafeShare" label="Cafe Share" />
          <ChargeBox name="ourShare" label="our Share" />
        </div>
        <div style={{ textAlign: "center" }}>
          <input type="submit" value="SAVE" className="saveBtn" />
        </div>
      </form>
    </div>
  );
};

export default AddStation;
