import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaArrowLeft,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 h-24 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto p-4">
        {/* Logo */}
        <div onClick={() => navigate("/")}>
          <img src="./logo.png" alt="Logo" className="w-40" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (visible on medium and larger screens) */}
        <ul className="hidden md:flex gap-5 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons (visible on medium and larger screens) */}
        <div className="hidden md:flex gap-5">
          <FaSearch className="w-5 h-5" />
         <span onClick={() => navigate("/signup")}><FaUser className="w-6 h-6" /></span>
          <FaShoppingCart className="w-5 h-5" />
        </div>
      </div>

      {/* Full-Screen Overlay Menu (visible on small screens when isOpen is true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center pt-30 z-40">
          {/* Back Arrow */}
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 text-gray-700"
            aria-label="Go back to home"
          >
            <FaArrowLeft size={24} />
          </button>

          <ul className="flex flex-col items-center gap-6 text-2xl w-full px-4">
            <li className="w-full">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block w-full bg-black text-white border border-gray-500 px-4 py-2 rounded text-center"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/collection"
                onClick={toggleMenu}
                className="block w-full bg-black text-white border border-gray-500 px-4 py-2 rounded text-center"
              >
                Collection
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block w-full bg-black text-white border border-gray-500 px-4 py-2 rounded text-center"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block w-full bg-black text-white border border-gray-500 px-4 py-2 rounded text-center"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-6 mt-8 relative">
            <FaSearch className="w-6 h-6" />
            <span onClick={() => navigate("/signup")}><FaUser className="w-6 h-6" /></span>
            <FaShoppingCart className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
