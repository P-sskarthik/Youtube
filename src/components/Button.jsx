import React from 'react';

const Button = ({ label, isActive }) => {
  return (
    <button
      className={`px-4 py-1 text-sm rounded-lg whitespace-nowrap ${
        isActive
          ? 'bg-white text-black font-semibold'
          : 'bg-neutral-800 text-white hover:bg-neutral-700'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
