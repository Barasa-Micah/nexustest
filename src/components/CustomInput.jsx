import React from 'react';

const CustomInput = ({ name, value, onChange, readOnly = false, className }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`px-3 py-2 border rounded ${className}`}
    />
  );
};

export default CustomInput;
