import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Speciality",
      path: "/speciality",
    },
    {
      title: "Doctors",
      path: "/doctors",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-[#0096D6] text-white sticky top-20 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop */}

        <div className="hidden lg:flex justify-center items-center h-16">

          <ul className="flex items-center gap-12">

            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-5 font-medium transition-all duration-300
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[3px]
                    after:bg-white
                    after:rounded-full
                    after:transition-all
                    after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

          </ul>

        </div>

        {/* Mobile */}

        <div className="lg:hidden flex justify-between items-center h-14">

          <span className="font-semibold text-lg">
            Menu
          </span>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={22} />
            ) : (
              <FaBars size={22} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden bg-[#009CD0] transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col">

          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-4 border-b border-white/20 transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#009CD0] font-semibold"
                    : "hover:bg-white hover:text-[#009CD0]"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;