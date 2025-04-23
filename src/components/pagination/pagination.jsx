import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

export default function Pagination({ currentPage, totalPages }) {
  const location = useLocation();

  const generatePageLink = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    return `/?${searchParams.toString()}`;
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5 mt-6">
      {/* Previous Page */}
      <NavLink
        to={generatePageLink(currentPage - 1)}
        className={`bg-darkBg border border-lime-500 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center group hover:bg-white transition duration-300 ease-in-out ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
      >
        <MdNavigateNext className="text-xl sm:text-2xl font-semibold text-white group-hover:text-black transition duration-300 ease-in-out rotate-180" />
      </NavLink>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <NavLink
          key={index}
          to={generatePageLink(index + 1)}
          className={`${
            currentPage === index + 1
              ? "bg-white text-black"
              : "bg-darkBg text-white"
          } border border-lime-500 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center group hover:bg-white hover:text-black transition duration-300 ease-in-out`}
        >
          <span className="text-xl sm:text-2xl font-semibold">{index + 1}</span>
        </NavLink>
      ))}

      {/* Next Page */}
      <NavLink
        to={generatePageLink(currentPage + 1)}
        className={`bg-darkBg border border-lime-500 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center group hover:bg-white transition duration-300 ease-in-out ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
      >
        <MdNavigateNext className="text-xl sm:text-2xl font-semibold text-white group-hover:text-black transition duration-300 ease-in-out" />
      </NavLink>
    </div>
  );
}