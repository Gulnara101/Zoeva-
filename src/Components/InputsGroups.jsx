import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import countryData from "../Mocks/countries";

const InputsGroups = ({ formData = {}, handleChange, hasError = {} }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="inputsGroups">
      <div className="selectContainer">
        <select
          value={formData.state}
          className={formData.state ? "filled" : ""}
          name="state"
          onChange={(e) => {
            setSelected(e.target.value);
            handleChange(e);
          }}
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
        <div className="custom">
          <CustomInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData?.firstName || ""}
            onChange={handleChange}
            hasError={!!hasError.firstName}
          />
          {hasError.firstName && (
            <span className="errorText">{hasError.firstName}</span>
          )}
        </div>
        <div className="custom">
          <CustomInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            hasError={!!hasError.lastName}
          />
          {hasError.lastName && (
            <span className="errorText">{hasError.lastName}</span>
          )}
        </div>
      </div>
      <div className="textInput">
        <CustomInput
          placeholder="Address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          hasError={!!hasError.address}
        />
        {hasError.address && (
          <span className="errorText">{hasError.address}</span>
        )}
      </div>
      <div className="textInput">
        <CustomInput
          placeholder="Apartment, suite, etc. (optional)"
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          hasError={!!hasError.apartment}
        />
        {hasError.apartment && (
          <span className="errorText">{hasError.apartment}</span>
        )}
      </div>
      <div className="postal">
        <div className="custom">
          <CustomInput
            placeholder="Postal code"
            type="number"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            hasError={!!hasError.zip}
          />
          {hasError.zip && <span className="errorText">{hasError.zip}</span>}
        </div>
        <div className="custom">
          <CustomInput
            placeholder="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            hasError={!!hasError.city}
          />
          {hasError.city && <span className="errorText">{hasError.city}</span>}
        </div>
      </div>
      <div className="inputAnswear">
        <CustomInput
          className="phone"
          type="number"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          hasError={!!hasError.phone}
        />
        {hasError.phone && <span className="errorText">{hasError.phone}</span>}
      </div>
    </div>
  );
};

export default InputsGroups;
