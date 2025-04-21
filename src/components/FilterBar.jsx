import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FilterBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("query", query);
    searchParams.set("page", 1);
    navigate(`/?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 font-pixel">
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Type your quest..."
          className="w-full sm:w-auto bg-black text-pixelYellow p-3 rounded-lg border-4 border-pixelBlue focus:outline-none focus:ring-4 focus:ring-pixelYellow placeholder-pixelYellow text-center text-lg shadow-pixel animate-pulse"
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