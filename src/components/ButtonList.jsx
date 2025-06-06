import React from 'react';
import Button from './Button';

const categories = [
  'All',
  'Music',
  'Action films',
  'Live',
  'Gaming',
  'News',
  'Computer Science',
  'Tech',
  'Movies',
  'Trailers',
  'Comedy',
  'Songs',
  'Education'
];

const ButtonList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="fixed top-14 left-65 right-0 z-40 bg-black border-b border-neutral-700">
      <div className="flex overflow-x-auto gap-2 px-4 py-2 scrollbar-hide">
        {categories.map((category, index) => (
          <Button
            key={index}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
