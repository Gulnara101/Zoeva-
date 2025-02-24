import React from "react";

const CustomInput = ({ type = "text", placeholder = "Email", value, onChange }) => {
  return (
    <div className="inputContainer">
      <input
        className={value ? "filled" : ""}
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
