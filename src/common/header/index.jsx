import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseconfig";
import Logo from "../../assets/icons/logo";
import FilterBar from "../../components/FilterBar";
import Sidebar from "../sidebar/sidebar";
import { FaBars } from "react-icons/fa";

const Header = ({ onSearch }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    setIsAdmin(user?.email === "kvaghasiya705@gmail.com");
  }, [auth.currentUser]);

  return (
    <>
      <header className="bg-cardGrey p-4 font-pixel text-neon shadow-lg border-b-2 border-pixelBlue sticky top-0 left-0 z-[999]">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="w-[100px] sm:w-[150px] hover:text-pixelYellow transition-all animate-pulse"
          >
            <Logo />
          </Link>
          <button
            className="lg:hidden text-pixelBlue text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <div className="hidden lg:flex space-x-4 text-sm">
            <Link to="/" className="hover:text-pixelRed transition-all">
              Home
            </Link>
            {isAdmin && (
              <Link to="/admin" className="hover:text-pixelRed transition-all">
                Manage
              </Link>
            )}
            <Link to="/about" className="hover:text-pixelBlue transition-all">
              About
            </Link>
          </div>
        </div>
        <FilterBar onSearch={onSearch} />
      </header>
      <Sidebar
        isAdmin={isAdmin}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
