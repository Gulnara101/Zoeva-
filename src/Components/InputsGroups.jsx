import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import countryData from "../Mocks/countries";
import { GoQuestion } from "react-icons/go";

const InputsGroups = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="inputsGroups">
      <div className="selectContainer">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={selected ? "filled" : ""}
        >
          <option value="" disabled hidden></option>
          <option value="" disabled selected>
            Country/Region
          </option>
          {countryData.map((item) => (
            <option key={item.id} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
        <label className={selected ? "active" : ""}>Country/Region</label>
      </div>
      <div className="userName">
        <CustomInput placeholder="First name" />
        <CustomInput placeholder="Last name" />
      </div>
      <div className="textInput">
        <CustomInput placeholder="Address" />
      </div>
      <div className="textInput">
        <CustomInput placeholder="Apartment, suite, etc. (optional)" />
      </div>
      <div className="postal">
        <CustomInput placeholder="Postal code" type="number" />
        <CustomInput placeholder="City" />
      </div>
      <div className="inputAnswear">
        <CustomInput
          className="phone"
          type="number"
          placeholder="Phone (optional)"
        />
        <GoQuestion className="question" />
      </div>
    </div>
  );
};

export default InputsGroups;
