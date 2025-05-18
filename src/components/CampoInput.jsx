import React from "react";

const CampoInput = ({ name, placeholder, value, onChange, ...rest }) => (
  <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default CampoInput;
