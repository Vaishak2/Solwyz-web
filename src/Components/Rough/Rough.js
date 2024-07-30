import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 top-0 bg-transparent">
      <div className="w-full flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">
          <a href="#">Logo</a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row items-center">
            <li className="mt-4 lg:mt-0 lg:ml-6">
              <a href="#" className="text-white">Home</a>
            </li>
            <li className="mt-4 lg:mt-0 lg:ml-6">
              <a href="#" className="text-white">About</a>
            </li>
            <li className="mt-4 lg:mt-0 lg:ml-6">
              <a href="#" className="text-white">Services</a>
            </li>
            <li className="mt-4 lg:mt-0 lg:ml-6">
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>




      <button type="button" className="text-banner-buttonBackground bg-white hover:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center">
                <svg class="w-7 h-7" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
      </button>




    </nav>
  );
};

export default Navbar;
