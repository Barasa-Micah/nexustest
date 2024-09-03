import React from 'react';

const CustomButton = ({ icon, variant = 'primary', children, onClick, className }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = variant === 'secondary' ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
