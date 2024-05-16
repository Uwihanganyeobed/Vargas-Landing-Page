import React from "react";

const Navbar = () => {
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
              <a href="#1" className="text-black hover:text-gray-300">
                Learn
              </a>
            </li>
            <li>
              <a href="#1" className="text-black hover:text-gray-300">
                Certificates
              </a>
            </li>
            <li>
              <a href="#1" className="text-black hover:text-gray-300">
                Tools
              </a>
            </li>
          </ul>
        </div>
        <div className="md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#1" className="text-black hover:text-gray-300">
                Donate
              </a>
            </li>
            <li>
              <a href="#1" className="text-black hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
