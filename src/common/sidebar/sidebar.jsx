import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTools } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/icons/logo";

const Sidebar = ({ isAdmin, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[9999]"
          onClick={onClose}
        />
      )}
      <aside
        className={`bg-darkBg text-neon font-pixel w-64 h-screen p-4 shadow-pixel fixed top-0 left-0 z-[99999] border-r-2 border-pixelBlue transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-pixelRed text-3xl mb-4">
            <IoClose />
          </button>
        </div>

        <div className="mb-10 text-center">
          <div className="w-[100px] sm:w-full hover:text-pixelYellow transition-all animate-pulse">
            <Logo />
          </div>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="hover:text-pixelYellow flex items-center gap-2 transition-all"
          >
            <FaHome /> Home
          </Link>
          {isAdmin && (
            <Link
              to="/admin"
              className="hover:text-pixelBlue flex items-center gap-2 transition-all"
            >
              <FaTools /> Admin
            </Link>
          )}
          <Link
            to="/about"
            className="hover:text-pixelRed flex items-center gap-2 transition-all"
          >
            <FaInfoCircle /> About
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
