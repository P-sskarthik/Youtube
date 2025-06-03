import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const categories = [
    'All',
    'Action films',
    'Telugu cinema',
    'Music',
    'Mixes',
    'Action Thrillers',
    'Hiking equipment',
    'Live',
    'Computer Science',
    'Tourism',
    'Recently uploaded',
    'Watched',
    'New for you',
  ];

  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-3 px-4 py-2 bg-black custom-scrollbar-hide">
      {categories.map((category, index) => (
        <Button key={index} label={category} isActive={index === 0} />
      ))}
    </div>
  );
};

export default ButtonList;
