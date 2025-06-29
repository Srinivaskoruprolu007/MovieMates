import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/favicon-new.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "My Bookings", path: "/my-bookings" },
  ];
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <nav className="fixed w-full bg-primary bg-opacity-90 backdrop-blur-lg z-50 p-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="movie-mates logo" className="w-10 h-10" />
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
            onClick={handleNavClick}
          >
            Movie Mates
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Right side icons and auth */}
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Search"
          >
            <LuSearch size={24} />
          </button>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors shadow-md"
              onClick={() => openSignIn()}
            >
              Login
            </button>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white ml-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiAlignLeft size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary bg-opacity-95 backdrop-blur-lg flex flex-col items-center space-y-4 py-6 shadow-lg z-50 animate-fade-in">
          {menuItems.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-semibold transition-colors ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mt-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors shadow-md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openSignIn();
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
