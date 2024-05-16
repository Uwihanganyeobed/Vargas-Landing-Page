import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="p-7 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:block">
          <ul className="flex space-x-4">
            <div className="flex-shrink-0 pr-12">
              <a href="#1" className="text-black font-bold text-xl">
                KFLS.com
              </a>
            </div>
            <li>
              <a
                href="#1"
                className={`text-black hover:text-gray-300 relative ${
                  activeLink === 0 && "border-b-2 border-green-500"
                }`}
                onClick={() => handleLinkClick(0)}
              >
                Learn
                {activeLink === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></span>
                )}
              </a>
            </li>
            <li>
              <a
                href="#1"
                className={`text-black hover:text-gray-300 relative ${
                  activeLink === 1 && "border-b-2 border-green-500"
                }`}
                onClick={() => handleLinkClick(1)}
              >
                Certificates
                {activeLink === 1 && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></span>
                )}
              </a>
            </li>
            <li>
              <a
                href="#1"
                className={`text-black hover:text-gray-300 relative ${
                  activeLink === 2 && "border-b-2 border-green-500"
                }`}
                onClick={() => handleLinkClick(2)}
              >
                Tools
                {activeLink === 2 && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"></span>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-md rounded-md">
          <ul className="flex flex-col space-y-2 items-end pr-4 pt-2">
            <li>
              <a
                href="#1"
                className="text-black hover:text-gray-300"
                onClick={() => handleLinkClick(0)}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="text-black hover:text-gray-300"
                onClick={() => handleLinkClick(1)}
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="text-black hover:text-gray-300"
                onClick={() => handleLinkClick(2)}
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="#1"
                className="text-black hover:text-gray-300"
                onClick={() => handleLinkClick(3)}
              >
                Tools
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
