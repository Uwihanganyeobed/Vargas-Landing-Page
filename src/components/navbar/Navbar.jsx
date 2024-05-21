import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <nav className="p-7 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="md:block">
          <ul className="flex space-x-4">
            <div className="flex-shrink-0 pr-5">
              <Link to="/" onClick={() => setActiveLink('/')}>
                <span className="text-black font-bold text-xl cursor-pointer">
                  Vargas Tech
                </span>
              </Link>
            </div>
            <li>
              <Link to="/portifolio" onClick={() => setActiveLink('/portifolio')}>
                <span className={`text-black hover:text-gray-300 cursor-pointer ${activeLink === '/portifolio' ? 'border-b-2 border-green-500' : ''}`}>
                  Portifolio
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setActiveLink('/projects')}>
                <span className={`text-black hover:text-gray-300 cursor-pointer ${activeLink === '/projects' ? 'border-b-2 border-green-500' : ''}`}>
                  Projects
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="/donate" onClick={() => setActiveLink('/donate')}>
                <span className={`text-black hover:text-gray-300 cursor-pointer ${activeLink === '/donate' ? 'border-b-2 border-green-500' : ''}`}>
                  Donate
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setActiveLink('/contact')}>
                <span className={`text-black hover:text-gray-300 cursor-pointer ${activeLink === '/contact' ? 'border-b-2 border-green-500' : ''}`}>
                  Contacts
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
