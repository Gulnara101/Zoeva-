import React, { useState } from "react";

const CustomInput = ({ type = "text", placeholder = "Email" }) => {
  const [value, setValue] = useState("");

  return (
    <div className="inputContainer">
      <input
        className={value ? "filled" : ""}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <label className={value ? "active" : ""}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;
