import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FilterBar = () => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("query", query);
    searchParams.set("page", 1);
    navigate(`/?${searchParams.toString()}`);
    setIsModalOpen(false); // close modal after search
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto px-4 hidden lg:block mt-[-50px]">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center font-pixel">
          <div className="relative">
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
              className="w-full bg-black text-pixelYellow p-3 rounded-lg border-4 border-pixelBlue focus:outline-none focus:ring-4 focus:ring-pixelYellow placeholder-pixelYellow text-center text-lg shadow-pixel"
            />
            {/* <div className="absolute inset-0 border-4 border-pixelRed rounded-lg animate-pulse pointer-events-none"></div> */}
          </div>
          <button
            onClick={handleSearch}
            className="relative bg-gradient-to-r from-pixelRed to-pixelYellow text-black px-6 py-3 rounded-lg font-bold text-lg shadow-pixel hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 bg-pixelBlue rounded-lg blur-md opacity-50"></span>
            <span className="relative z-10">⚡ Search</span>
          </button>
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center px-4 lg:mt-[-40px] lg:md:mb-3 mb-0 mt-[-30px]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-pixelYellow text-2xl flex justify-center items-center gap-2 bg-pixelRed rounded-lg px-3 py-1 hover:scale-105 transition-transform duration-300 shadow-pixel"
        >
          Search
          <FaSearch />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[99999] flex items-center justify-center px-4">
          <div className="bg-darkBg border-4 border-pixelBlue p-6 rounded-lg w-full max-w-md shadow-pixel font-pixel">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search your quest..."
                className="w-full bg-black text-pixelYellow p-3 rounded-lg border-4 border-pixelRed focus:outline-none placeholder-pixelYellow text-center text-lg"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleSearch}
                className="bg-pixelYellow text-black px-4 py-2 rounded hover:scale-105 transition"
              >
                Search
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-pixelRed font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBar;
