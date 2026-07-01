import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaAmbulance,
  FaSearch,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";

const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white z-50 sticky top-0">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 ">

          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/CityhealthCare.jpg"
                alt="City Healthcare"
                className="h-14 object-contain"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-8">

              {/* Call */}
              <a
                href="tel:+911800123456"
                className="flex items-center gap-2 hover:text-teal-600 transition"
              >
                <FaPhoneAlt className="text-lg" />
                <span className="font-medium">
                  Call
                </span>
              </a>

              {/* Search */}
              <div className="relative">

                <input
                  type="text"
                  placeholder="Search Doctors..."
                  className="border rounded-full pl-11 pr-5 py-2.5 w-72 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />

                <FaSearch className="absolute left-4 top-3.5 text-gray-500" />

              </div>

              {/* Emergency */}

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Emergency
                </p>

                <a
                  href="tel:108"
                  className="font-bold text-red-600"
                >
                  108
                </a>
              </div>

              {/* Language */}

              <div className="flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer">

                <FaGlobe />

                <select className="outline-none bg-transparent cursor-pointer">
                  <option>EN</option>
                  <option>हिंदी</option>
                  <option>ਪੰਜਾਬੀ</option>
                </select>

              </div>

              {/* Ambulance */}

              <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">

                <FaAmbulance />

                Ambulance

              </button>

            </div>

          </div>

          {/* Mobile */}

          <div className="lg:hidden flex items-center justify-between h-16">

            <img
              src="/CityhealthCare.jpg"
              alt="logo"
              className="h-10"
            />

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-5 py-5 space-y-5">

            <a
              href="tel:+911800123456"
              className="flex items-center gap-3"
            >
              <FaPhoneAlt />
              Call Hospital
            </a>

            <div className="relative">

              <input
                type="text"
                placeholder="Search Doctors..."
                className="border w-full rounded-full pl-11 pr-4 py-3"
              />

              <FaSearch className="absolute left-4 top-4 text-gray-500" />

            </div>

            <div className="flex justify-between items-center">

              <div>
                <p className="text-xs text-gray-500">
                  Emergency
                </p>

                <a
                  href="tel:108"
                  className="font-bold text-red-600"
                >
                  108
                </a>

              </div>

              <div className="flex items-center gap-2">

                <FaGlobe />

                <select className="outline-none">
                  <option>EN</option>
                  <option>हिंदी</option>
                  <option>ਪੰਜਾਬੀ</option>
                </select>

              </div>

            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full flex justify-center items-center gap-3">

              <FaAmbulance />

              Request Ambulance

            </button>

          </div>

        </div>

      </header>
    </>
  );
};

export default TopNavbar;