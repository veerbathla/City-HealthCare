import React, { useMemo, useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import DoctorCard from "../components/DoctorCard";
import doctors from "../data/doctors";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.department)),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchSearch = doctor.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchDepartment =
        department === "All" || doctor.department === department;

      return matchSearch && matchDepartment;
    });
  }, [search, department]);

  const heroImages = [hero3, hero4];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 pt-14 pb-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#009CD0]">
            Our Doctors
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet our experienced doctors dedicated to providing
            world-class healthcare services.
          </p>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[650px] overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              currentHero === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Search + Filter */}
      <div className="max-w-7xl mx-auto px-5 mt-12">
        <div className="bg-white rounded-2xl shadow-md p-5 mb-10">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search Doctor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#009CD0]"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#009CD0]"
              >
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctor Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-700">
              No Doctor Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try another name or select a different department.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;