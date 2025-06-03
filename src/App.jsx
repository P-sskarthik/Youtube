import React, { useState } from 'react';
import Head from './components/Head';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="relative">
      <Head toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content area with dynamic left margin */}
      <div
        className={`pt-14 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <Body />
      </div>
    </div>
  );
}

export default App;
