import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/favicon-new.svg";
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-gray-800 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-8 px-4">
        <div className="flex flex-col items-start md:w-1/5 space-y-3">
          <div className="flex items-center space-x-3 mb-2">
            <img src={logo} alt="movie mates logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold">Movie Mates</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            The best place to find movies and book tickets
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col md:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-white transition-colors">
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/my-bookings"
                className="hover:text-white transition-colors"
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="hover:text-white transition-colors"
              >
                Favourites
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-white transition-colors">
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="flex flex-col md:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-dull text-sm">
            <li>
              <a href="#" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:w-1/5 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
          <p className="text-dull text-sm">
            123 Movie Lane, Cinema City, CA 90210
          </p>
          <p className="text-dull text-sm">Email: info@moviemates.com</p>
          <p className="text-dull text-sm">Phone: (123) 456-7890</p>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col items-start md:items-end md:w-1/5 space-y-3">
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-violet-400 transition-colors"
              aria-label="Facebook"
            >
              <FiFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-dull text-sm">
        &copy; {new Date().getFullYear()} Movie Mates. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
