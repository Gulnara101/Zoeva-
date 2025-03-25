import React, { useState, useEffect } from "react";

const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  hasError,
  onBlur,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(value && value.trim() !== "");
  }, [value]);

  return (
    <div className="inputContainer">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${isFilled ? "filled" : ""} ${
          hasError ? "inputError" : ""
        }`}
        onBlur={onBlur}
      />
      <label onClick={(e) => e.target.previousElementSibling.focus()}>
        {placeholder}
      </label>
    </div>
  );
};

export default CustomInput;
