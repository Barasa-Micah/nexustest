import React from 'react';

const CustomTextarea = ({ name, value, onChange, className }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded ${className}`}
      rows="4"
    />
  );
};

export default CustomTextarea;
