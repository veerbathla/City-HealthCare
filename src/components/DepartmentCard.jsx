import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DepartmentCard = ({ department }) => {
  const {
    name,
    image,
    icon,
    shortDescription,
    hero,
    slug,
    doctorSlug,
  } = department;

  // Decide destination automatically
  const link = hero
    ? `/speciality/${slug}`
    : `/doctors/${doctorSlug}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-5 left-5">
          <div className="w-14 h-14 rounded-full bg-[#0096D6] text-white flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          {name}
        </h3>

        <p className="mt-4 text-gray-600 leading-7 flex-1 line-clamp-4">
          {shortDescription}
        </p>

        <Link
          to={link}
          className="mt-8 inline-flex items-center justify-center gap-3 bg-[#0096D6] hover:bg-cyan-700 text-white px-6 py-3 rounded-full transition"
        >
          Explore Department
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

      </div>

    </div>
  );
};

export default DepartmentCard;