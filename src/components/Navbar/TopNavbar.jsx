import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaAmbulance,
  FaSearch,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";

const TopNavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">

        {/* Navbar */}
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <img
            src="/CityhealthCare.jpg"
            alt="City Healthcare"
            className="h-10 lg:h-14 object-contain"
          />

          {/* Right Side */}
          <div className="flex items-center gap-2 lg:gap-7">

            {/* Desktop Search */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search Doctors..."
                className="border rounded-full pl-11 pr-5 py-2.5 w-72 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />

              <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
            </div>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <FaSearch />
            </button>

            {/* Call */}
            <a
              href="tel:+911800123456"
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <FaPhoneAlt />
            </a>

            {/* Emergency */}
            <div className="text-center leading-none">
              <p className="text-[10px] text-gray-500 hidden sm:block">
                Emergency
              </p>

              <a
                href="tel:108"
                className="font-bold text-red-600 text-sm lg:text-base"
              >
                108
              </a>
            </div>

            {/* Language */}
            <div className="flex items-center border rounded-full px-2 lg:px-4 py-2">

              <FaGlobe className="text-sm" />

              <select className="bg-transparent outline-none text-xs lg:text-sm cursor-pointer ml-1">

                <option>EN</option>
                <option>हिंदी</option>
                <option>ਪੰਜਾਬੀ</option>

              </select>

            </div>

            {/* Ambulance */}
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center gap-2 px-3 lg:px-6 py-2.5 transition">

              <FaAmbulance />

              <span className="hidden md:inline">
                Ambulance
              </span>

            </button>

          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="lg:hidden border-t bg-white p-3">

          <div className="relative">

            <input
              autoFocus
              type="text"
              placeholder="Search Doctors..."
              className="w-full border rounded-full py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />

            <FaSearch className="absolute left-4 top-4 text-gray-500" />

            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-4 top-4 text-gray-500"
            >
              <FaTimes />
            </button>

          </div>

        </div>
      )}
    </header>
  );
};

export default TopNavbar;