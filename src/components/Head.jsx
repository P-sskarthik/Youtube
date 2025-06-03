import React from 'react';

const Head = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 py-2 bg-black text-white">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Hamburger Icon */}
        <img
          onClick={toggleSidebar}
          className="w-6 h-6 cursor-pointer"
          alt="menu"
          src="https://www.citypng.com/public/uploads/preview/transparent-hd-white-menu-burger-icon-701751695037039ulxnzxwywi.png"
        />

        {/* YouTube Logo */}
        <img
          className="h-6"
          alt="YouTube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      {/* Center Search */}
      <div className="flex items-center flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-l-full bg-neutral-900 border border-neutral-700 focus:outline-none text-white"
        />
        <button className="bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-r-full cursor-pointer">
          <img
            alt="search"
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          />
        </button>
      </div>

      {/* User Avatar */}
      <div>
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
        />
      </div>
    </div>
  );
};

export default Head;
