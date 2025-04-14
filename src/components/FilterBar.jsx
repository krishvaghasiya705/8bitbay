import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(query);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8 font-pixel">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your quest..."
          className="bg-black text-pixelYellow p-3 rounded-lg border-4 border-pixelBlue focus:outline-none focus:ring-4 focus:ring-pixelYellow placeholder-pixelYellow text-center text-lg shadow-pixel animate-pulse"
        />
        <div className="absolute inset-0 border-4 border-pixelRed rounded-lg animate-pulse pointer-events-none"></div>
      </div>
      <button
        onClick={handleSearch}
        className="relative bg-gradient-to-r from-pixelRed to-pixelYellow text-black px-6 py-3 rounded-lg font-bold text-lg shadow-pixel hover:scale-105 transition-transform duration-300"
      >
        <span className="absolute inset-0 bg-pixelBlue rounded-lg blur-md opacity-50"></span>
        <span className="relative z-10">⚡ Search</span>
      </button>
    </div>
  );
};

export default FilterBar;
