import React from "react";

const Header = () => {
  return (
    <div className="max-w-screen-2xl w-full  mx-auto px-2 sm:px-4  lg:px-[100px]">
      <header className="w-full py-4 ">
        {/* Desktop Header (min-width: 761px) */}
        <div className="hidden md:flex items-center justify-between  w-full">
          {/* Cart Icon + Logo */}
          <div className="flex items-center space-x-2">
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M6 16h28l-3 8H11l-5-16h34"
                  stroke="#FDBA2D"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx="13" cy="28" r="2" fill="#FDBA2D" />
                <circle cx="29" cy="28" r="2" fill="#FDBA2D" />
                <path
                  d="M8 8l2 6h22l2-6"
                  stroke="#FDBA2D"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M2 10c2-2 4-2 6-2"
                  stroke="#FDBA2D"
                  strokeWidth="2.5"
                  fill="none"
                />
              </g>
            </svg>
            <span className="text-3xl md:text-4xl font-semibold text-[#25608A]">
              shop<span className="text-[#25608A]">zilla</span>
            </span>
          </div>
          {/* Search Bar */}
          <form className="flex flex-1 ml-6 items-center max-w-2xl">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full pl-10 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FDBA2D] text-base md:text-xl text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="ml-2 px-8 py-3 bg-[#FDBA2D] hover:bg-yellow-400 text-white font-bold rounded shadow text-lg transition-all whitespace-nowrap"
            >
              SEARCH
            </button>
          </form>
        </div>
        {/* Mobile/Tablet Header (max-width: 760px) */}
        <div className="flex flex-col md:hidden w-full">
          <div className="flex items-center justify-between mb-4">
            {/* Hamburger Menu */}
            <button
              className="block mr-2 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#36B6FF"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            {/* Logo */}
            <div className="flex items-center space-x-2 ml-auto">
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M6 16h28l-3 8H11l-5-16h34"
                    stroke="#FDBA2D"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle cx="13" cy="28" r="2" fill="#FDBA2D" />
                  <circle cx="29" cy="28" r="2" fill="#FDBA2D" />
                  <path
                    d="M8 8l2 6h22l2-6"
                    stroke="#FDBA2D"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M2 10c2-2 4-2 6-2"
                    stroke="#FDBA2D"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </g>
              </svg>
              <span className="text-3xl font-semibold text-[#25608A]">
                shop<span className="text-[#25608A]">zilla</span>
              </span>
            </div>
          </div>
          {/* Search Bar */}
          <form className="w-full flex flex-row items-center">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full pl-10 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FDBA2D] text-base text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="ml-2 px-8 py-3 bg-[#FDBA2D] hover:bg-yellow-400 text-white font-bold rounded shadow text-lg transition-all whitespace-nowrap"
            >
              SEARCH
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
