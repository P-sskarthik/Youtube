import React from 'react';
import Head from './Head';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="bg-black min-h-screen">
      <Head />
      <div className="flex pt-[104px]">
        {/* Sidebar - hidden on small screens */}
        {isMenuOpen && (
          <div className="hidden sm:block fixed top-[104px] bottom-0 left-0 z-30 w-64 bg-black text-white overflow-y-auto">
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isMenuOpen ? 'ml-0 sm:ml-64' : 'ml-0 sm:ml-20'
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
