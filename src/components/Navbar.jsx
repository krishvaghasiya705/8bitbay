import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo";

const Navbar = () => {
  return (
    <nav className="bg-cardGrey p-4 flex justify-between items-center font-pixel text-neon shadow-lg border-b-2 border-pixelBlue">
      <Link
        to="/"
        className="w-[150px] hover:text-pixelYellow transition-all animate-pulse"
      >
        <Logo />
      </Link>
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:text-pixelRed transition-all neon-hover">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-pixelBlue transition-all neon-hover"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
