import React from 'react';
import Head from './Head';          // ✅ Add this
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="bg-black min-h-screen">
      <Head />                     {/* ✅ Now inside Router context */}
      <div className="flex pt-[104px]">
        {/* Sidebar */}
        <div
          className={`fixed top-[104px] bottom-0 left-0 z-30 bg-black text-white overflow-y-auto transition-all duration-300
          ${isMenuOpen ? 'w-64' : 'w-20'}`}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isMenuOpen ? 'ml-64' : 'ml-20'
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
