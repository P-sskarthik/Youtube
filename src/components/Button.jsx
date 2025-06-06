import React from 'react';

const Button = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick} // ✅ attach handler here
      className={`px-4 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors duration-200 ${
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
