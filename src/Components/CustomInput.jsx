import React, { useState } from "react";

const CustomInput = ({ type = "text", placeholder, value, onChange, hasError }) => {
  return (
    <div className="inputContainer">
      <input
        className={`${hasError ? "error" : value ? "success" : ""}`}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
      <label className={value ? "active" : ""}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;