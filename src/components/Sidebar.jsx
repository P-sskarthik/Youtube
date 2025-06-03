import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-14 left-0 h-[calc(100%-56px)] bg-black text-white transform transition-transform duration-300 z-40 overflow-y-auto ${
        isOpen ? 'translate-x-0 w-64' : '-translate-x-full'
      }`}
    >
      <div className="p-4 space-y-4">
        {/* Home Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="Home" className="w-5 h-5" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img src="https://cdn-icons-png.flaticon.com/512/2550/2550183.png" alt="Shorts" className="w-5 h-5" />
            <span>Shorts</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="Subscriptions" className="w-5 h-5" />
            <span>Subscriptions</span>
          </div>
        </div>

        <hr className="border-neutral-700" />

        {/* You Section */}
        <div className="space-y-2">
          <h2 className="text-sm text-neutral-400">You</h2>
          {[
            { label: 'History', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' },
            { label: 'Playlists', icon: 'https://cdn-icons-png.flaticon.com/512/3313/3313887.png' },
            { label: 'Your videos', icon: 'https://cdn-icons-png.flaticon.com/512/727/727245.png' },
            { label: 'Watch later', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828959.png' },
            { label: 'Liked videos', icon: 'https://cdn-icons-png.flaticon.com/512/889/889140.png' },
          ].map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
              <img src={icon} alt={label} className="w-5 h-5" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <hr className="border-neutral-700" />

        {/* Subscriptions Section */}
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

        {/* Settings & Support */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png"
              alt="Settings"
              className="w-5 h-5"
            />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
              alt="Report history"
              className="w-5 h-5"
            />
            <span>Report history</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545705.png"
              alt="Help"
              className="w-5 h-5"
            />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
              alt="Send feedback"
              className="w-5 h-5"
            />
            <span>Send feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

