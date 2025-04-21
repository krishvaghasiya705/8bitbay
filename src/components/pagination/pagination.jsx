import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", page);
      navigate(`/?${searchParams.toString()}`);
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center gap-5 mt-6">
      <div
        className={`bg-darkBg border border-lime-500 w-10 h-10 cursor-pointer flex justify-center items-center group hover:bg-white transition duration-300 ease-in-out ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <MdNavigateNext className="text-2xl font-semibold text-white group-hover:text-black transition duration-300 ease-in-out rotate-180" />
      </div>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`${
            currentPage === index + 1 ? "bg-white text-black" : "bg-darkBg text-white"
          } border border-lime-500 w-10 h-10 cursor-pointer flex justify-center items-center group hover:bg-white hover:text-black transition duration-300 ease-in-out`}
          onClick={() => handlePageChange(index + 1)}
        >
          <span className="text-2xl font-semibold">{index + 1}</span>
        </div>
      ))}
      <div
        className={`bg-darkBg border border-lime-500 w-10 h-10 cursor-pointer flex justify-center items-center group hover:bg-white transition duration-300 ease-in-out ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <MdNavigateNext className="text-2xl font-semibold text-white group-hover:text-black transition duration-300 ease-in-out" />
      </div>
    </div>
  );
}