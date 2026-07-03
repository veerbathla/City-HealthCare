import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { departments } from "../../data/departments";
const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSpecialityOpen, setMobileSpecialityOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Speciality", path: "/" },
    { title: "Doctors", path: "/doctors" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];


  return (
    <>
      {/* ===================== DESKTOP NAVBAR ===================== */}

      <nav className="hidden lg:block sticky top-20 z-40 bg-[#0096D6] shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-center items-center gap-12 h-16 text-white">
            {navItems.map((item) => (
              <li
                key={item.title}
                className={item.title === "Speciality" ? "relative group" : ""}
              >
                {item.title === "Speciality" ? (
                  <>
                    <NavLink
                      to="/"
                      // className={({ isActive }) =>
                      //   `relative font-medium transition-all
                      //   after:absolute
                      //   after:left-0
                      //   after:-bottom-5
                      //   after:h-[3px]
                      //   after:bg-white
                      //   after:rounded-full
                      //   after:transition-all
                      //   after:duration-300
                      //   ${
                      //     isActive
                      //       ? "after:w-full"
                      //       : "after:w-0 group-hover:after:w-full"
                      //   }`
                      // }
                    >
                      Speciality
                    </NavLink>

                    <div
                      className="
                      absolute
                      top-full
                      left-1/2
                      -translate-x-1/2
                      mt-5
                      w-64
                      bg-white
                      rounded-xl
                      shadow-2xl
                      overflow-hidden
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all
                      duration-300
                      z-50
                    "
                    >
                      {departments.map((dept) => (
                        <NavLink
                          key={dept.id}
                          to={`/speciality/${dept.slug}`}
                          className="block px-5 py-3 text-gray-700 hover:bg-[#0096D6] hover:text-white transition"
                        >
                          {dept.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative font-medium transition-all
                      after:absolute
                      after:left-0
                      after:-bottom-5
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
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ===================== MOBILE DRAWER ===================== */}

      <div
        className={`lg:hidden fixed left-0 right-0 bottom-20 bg-white shadow-2xl z-40 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="pt-0 pb-2">
          {navItems.map((item) => {
            if (item.title === "Speciality") {
              return (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setMobileSpecialityOpen(!mobileSpecialityOpen)
                    }
                    className="w-full flex justify-between items-center px-5 py-4 border-b hover:bg-gray-50"
                  >
                    <span>Speciality</span>

                    {mobileSpecialityOpen ? (
                      <FaChevronDown className="text-gray-400 text-xs" />
                    ) : (
                      <FaChevronRight className="text-gray-400 text-xs" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileSpecialityOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {departments.map((dept) => (
                      <NavLink
                        key={dept.id}
                        to={`/speciality/${dept.slug}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSpecialityOpen(false);
                        }}
                        className="block pl-10 pr-5 py-3 border-b bg-gray-50 hover:bg-[#0096D6] hover:text-white transition"
                      >
                        {dept.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center px-5 py-4 border-b hover:bg-gray-50"
              >
                <span>{item.title}</span>

                <FaChevronRight className="text-gray-400 text-xs" />
              </NavLink>
            );
          })}

          <div className="m-4 border border-red-500 rounded-lg p-4">
            <p className="text-gray-500 text-sm">Emergency</p>

            <a href="tel:108" className="text-red-600 text-2xl font-bold">
              108
            </a>
          </div>
        </div>
      </div>

      {/* ===================== MOBILE BOTTOM NAV ===================== */}

      <nav className="lg:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className="grid grid-cols-5 bg-[#0096D6] rounded-2xl shadow-2xl h-14 overflow-hidden">
          {/* Menu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center text-white text-[10px] active:scale-95 transition"
          >
            {menuOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
            <span className="mt-1">Menu</span>
          </button>

          {/* Call */}

          <a
            href="tel:+911800123456"
            className="flex flex-col items-center justify-center text-white text-[10px]"
          >
            <FaPhoneAlt size={17} />
            <span className="mt-1">Call</span>
          </a>

          {/* Book */}

          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-[10px] transition ${
                isActive ? "text-yellow-300" : "text-white"
              }`
            }
          >
            <FaCalendarCheck size={17} />
            <span className="mt-1">Book</span>
          </NavLink>

          {/* Doctors */}

          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-[10px] transition ${
                isActive ? "text-yellow-300" : "text-white"
              }`
            }
          >
            <FaUserMd size={17} />
            <span className="mt-1">Doctors</span>
          </NavLink>

          {/* Home */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-[10px] transition ${
                isActive ? "text-yellow-300" : "text-white"
              }`
            }
          >
            <FaHome size={17} />
            <span className="mt-1">Home</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
