import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaAmbulance,
  FaSearch,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import doctors from "../../data/doctors";
import { departments } from "../../data/departments";

const TopNavbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  
  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const keyword = value.toLowerCase();

    const doctorResults = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(keyword) ||
        doctor.department.toLowerCase().includes(keyword) ||
        doctor.speciality.toLowerCase().includes(keyword)
    );

    const departmentResults = departments.filter((department) =>
      department.name.toLowerCase().includes(keyword)
    );

    setResults([
      ...doctorResults.map((item) => ({
        ...item,
        type: "doctor",
      })),
      ...departmentResults.map((item) => ({
        ...item,
        type: "department",
      })),
    ]);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">

         

          <div className="shrink-0">
            <img
              src="/CityhealthCare.jpg"
              alt="City Healthcare"
              className="h-10 lg:h-14 object-contain"
            />
          </div>

          

          <div className="flex flex-1 items-center justify-end gap-2 lg:gap-4">

           

            <div className="relative hidden lg:block flex-1 max-w-xl xl:max-w-2xl">

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search Doctors or Departments..."
                className="w-full rounded-full border border-gray-200 py-3 pl-11 pr-5 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                           
              {results.length > 0 && (
                <div className="absolute left-0 top-full z-50 mt-3 w-full overflow-hidden rounded-2xl border bg-white shadow-xl">

                  <div className="max-h-80 overflow-y-auto">

                    {results.map((item) => (
                      <div
                        key={`${item.type}-${item.slug}`}
                        onClick={() => {
                          navigate(
                            item.type === "doctor"
                              ? `/doctors/${item.slug}`
                              : `/departments/${item.slug}`
                          );

                          setSearch("");
                          setResults([]);
                        }}
                        className="flex cursor-pointer items-center gap-3 border-b p-3 transition hover:bg-sky-50"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>

                          <h3 className="font-semibold text-gray-800">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {item.type === "doctor"
                              ? item.designation
                              : "Department"}
                          </p>

                        </div>
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

            

            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 lg:hidden"
            >
              <FaSearch />
            </button>

            

            <a
              href="tel:+919728375033"
              className="hidden xl:flex items-center gap-3 rounded-full border border-red-200 bg-red-50 px-4 py-2 transition hover:bg-red-100"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                <FaPhoneAlt />
              </div>

              <div className="leading-tight">

                <p className="text-[11px] uppercase tracking-wide text-gray-500">
                  Emergency
                </p>

                <p className="font-bold text-red-600">
                  +91 97283 75033
                </p>

              </div>

            </a>

            

            <a
              href="tel:+919728375033"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 xl:hidden"
            >
              <FaPhoneAlt />
            </a>

           

            <div className="flex items-center rounded-full border border-gray-200 px-3 py-2">

              <FaGlobe className="text-gray-500" />

              <select
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  localStorage.setItem("language", e.target.value);
                }}
                className="ml-2 bg-transparent text-sm outline-none"
              >
                <option value="en">EN</option>
                <option value="hi">हिन्दी</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
              </select>

            </div>
                       

            <button
              className="
                flex items-center gap-2
                rounded-full
                bg-red-600
                px-3
                lg:px-5
                py-2.5
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-red-700
                hover:shadow-lg
              "
            >
              <FaAmbulance className="text-lg" />

              <span className="hidden md:inline">
                Ambulance
              </span>
            </button>

          </div>

        </div>

      </div>

     
      {searchOpen && (
        <div className="border-t bg-white p-4 lg:hidden">

          <div className="relative">

            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Doctors or Departments..."
              className="
                w-full
                rounded-full
                border
                border-gray-200
                py-3
                pl-11
                pr-12
                outline-none
                focus:border-sky-500
                focus:ring-2
                focus:ring-sky-500/20
              "
            />

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <button
              onClick={() => {
                setSearchOpen(false);
                setSearch("");
                setResults([]);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <FaTimes />
            </button>

          </div>

          

          {results.length > 0 && (

            <div className="mt-4 overflow-hidden rounded-2xl border bg-white shadow-lg">

              {results.map((item) => (

                <div
                  key={`${item.type}-${item.slug}`}
                  onClick={() => {

                    navigate(
                      item.type === "doctor"
                        ? `/doctors/${item.slug}`
                        : `/departments/${item.slug}`
                    );

                    setSearchOpen(false);
                    setSearch("");
                    setResults([]);

                  }}
                  className="flex cursor-pointer items-center gap-3 border-b p-3 transition hover:bg-sky-50"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.type === "doctor"
                        ? item.designation
                        : "Department"}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
      )}

    </header>
  );
};

export default TopNavbar;