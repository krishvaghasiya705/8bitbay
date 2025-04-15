import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseconfig";
import Logo from "../../assets/icons/logo";
import FilterBar from "../../components/FilterBar";

const Header = ({ onSearch }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user?.email === "kvaghasiya705@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [auth.currentUser]);

  return (
    <header className="bg-cardGrey p-4 flex justify-between items-center font-pixel text-neon shadow-lg border-b-2 border-pixelBlue sticky top-0 left-0 z-[999999]">
      <Link
        to="/"
        className="w-[150px] hover:text-pixelYellow transition-all animate-pulse"
      >
        <Logo />
      </Link>

      <FilterBar onSearch={onSearch} />
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:text-pixelRed transition-all neon-hover">
          Home
        </Link>
        {isAdmin && (
          <Link to="/admin" className="hover:text-pixelRed transition-all neon-hover">
            Manage
          </Link>
        )}
        <Link
          to="/about"
          className="hover:text-pixelBlue transition-all neon-hover"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
