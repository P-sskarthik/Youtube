import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const contentCategories = [
  { label: 'Songs', icon: '🎵' },
  { label: 'Tech', icon: '💻' },
  { label: 'Action Movies', icon: '🎬' },
  { label: 'Gaming', icon: '🎮' },
  { label: 'Travel', icon: '🧳' },
  { label: 'Education', icon: '📚' },
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  if (!isMenuOpen) return null;

  const handleCategoryClick = (category) => {
    navigate(`/results?search_query=${encodeURIComponent(category)}`);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Home */}
      <div className="space-y-2">
        <div
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800 cursor-pointer"
          onClick={() => navigate('/')} // ✅ Go to home
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxXTuxRJzWsUA0uiZKT-_79osm34J9fwZ9A&s"
            alt="Home"
            className="w-5 h-5"
          />
          <span>Home</span>
        </div>
      </div>

      <hr className="border-neutral-700" />

      {/* Quick Category Filters */}
      <div className="space-y-2">
        <h2 className="text-sm text-neutral-400">Explore</h2>
        {contentCategories.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-800 cursor-pointer"
            onClick={() => handleCategoryClick(label)}
          >
            <span className="text-lg">{icon}</span>
            <span className="truncate">{label}</span>
          </div>
        ))}
      </div>

      <hr className="border-neutral-700" />

      {/* Subscriptions */}
      <div className="space-y-2">
        <h2 className="text-sm text-neutral-400">Subscriptions</h2>
        {['Sports', 'Tech', 'News', 'Adventures'].map((name, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src={`https://i.pravatar.cc/150?img=${i + 5}`}
              alt={name}
              className="w-6 h-6 rounded-full"
            />
            <span className="truncate">{name}</span>
            <span className="text-blue-400 text-xs ml-auto">•</span>
          </div>
        ))}
      </div>

      <hr className="border-neutral-700" />

    </div>
  );
};

export default Sidebar;
