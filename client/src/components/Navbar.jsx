import { useState } from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/favicon-new.svg";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
    },
  ];
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-md z-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="movie-mates logo" />
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-gray-300"
            onClick={handleNavClick}
          >
            Movie Mates
          </Link>
        </div>
        {/* desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* right side icons and auth buttons */}
        <div className="flex items-center space-x-4">
          <LuSearch
            className="text-gray-300 hover:text-white cursor-pointer"
            size={24}
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 cursor-pointer">
            Login
          </button>
          {/* mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX size={24} /> : <FiAlignLeft size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary bg-opacity-80 backdrop-blur-md flex flex-col items-center space-y-4 py-4">
          {menuItems.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
