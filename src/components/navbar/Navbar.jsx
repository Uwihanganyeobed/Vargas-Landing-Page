import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={() => setActiveLink('/')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-green-500 transition-all duration-300">
                COD :)
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8">
              <Link to="/projects" onClick={() => setActiveLink('/projects')}>
                <span className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${activeLink === '/projects' ? 'text-green-500 border-b-2 border-green-500' : ''}`}>
                  Projects
                </span>
              </Link>
              <Link to="/donate" onClick={() => setActiveLink('/donate')}>
                <span className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${activeLink === '/donate' ? 'text-green-500 border-b-2 border-green-500' : ''}`}>
                  Donate
                </span>
              </Link>
              <Link to="/contact" onClick={() => setActiveLink('/contact')}>
                <span className={`text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${activeLink === '/contact' ? 'text-green-500 border-b-2 border-green-500' : ''}`}>
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/projects" onClick={() => {setActiveLink('/projects'); setIsMenuOpen(false)}}>
              <span className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 transition-colors duration-200
                ${activeLink === '/projects' ? 'text-green-500 bg-green-50' : ''}`}>
                Projects
              </span>
            </Link>
            <Link to="/donate" onClick={() => {setActiveLink('/donate'); setIsMenuOpen(false)}}>
              <span className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 transition-colors duration-200
                ${activeLink === '/donate' ? 'text-green-500 bg-green-50' : ''}`}>
                Donate
              </span>
            </Link>
            <Link to="/contact" onClick={() => {setActiveLink('/contact'); setIsMenuOpen(false)}}>
              <span className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 transition-colors duration-200
                ${activeLink === '/contact' ? 'text-green-500 bg-green-50' : ''}`}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
