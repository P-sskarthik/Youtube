import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, CORS_PROXY } from '../utils/constants';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) getSearchSuggestions(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async (query) => {
    try {
      const url = CORS_PROXY + encodeURIComponent(YOUTUBE_SEARCH_API + query);
      const res = await fetch(url);
      const json = await res.json();
      setSuggestions(json[1]);
    } catch (err) {
      console.error('Suggestion Fetch Error:', err);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 py-2 bg-black text-white">
      <div className="flex items-center gap-4">
        <img onClick={toggleMenuHandler} className="w-6 h-6 cursor-pointer" alt="menu"
          src="https://www.citypng.com/public/uploads/preview/transparent-hd-white-menu-burger-icon-701751695037039ulxnzxwywi.png" />
        <img
  className="h-35 w-auto"
  alt="ZunoTube-logo"
  src="./Zuno.png"
/>
      </div>

      <div className="relative flex items-center flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-l-full bg-neutral-900 border border-neutral-700 focus:outline-none text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // ✅ Search on Enter
        />
        <button
          onClick={handleSearch}
          className="bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-r-full cursor-pointer"
        >
          <img alt="search" className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-neutral-900 border border-neutral-700 text-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onMouseDown={() => {
                  setSearchQuery(s);
                  navigate(`/results?search_query=${encodeURIComponent(s)}`);
                }}
                className="py-2 px-4 hover:bg-gray-100 hover:text-black cursor-pointer"
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <img className="w-8 h-8 rounded-full cursor-pointer" alt="user"
          src="https://cdn-icons-png.flaticon.com/512/219/219988.png" />
      </div>
    </div>
  );
};

export default Head;
