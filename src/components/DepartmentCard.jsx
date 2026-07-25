import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DepartmentCard = ({ department }) => {
  const { name, image, shortDescription, hero, overview, slug, doctorSlug } =
    department;

  const displayImage = hero?.image ?? image ?? "";

  const description =
    shortDescription ||
    (Array.isArray(overview?.description)
      ? overview.description[0]
      : overview?.description) ||
    "";

 
  const link = hero ? `/speciality/${slug}` : `/doctors/${doctorSlug}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
     
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-video">
          <img
            src={displayImage}
            alt={name}
            className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
            onError={() => {
              console.warn("Image failed to load:", slug, displayImage);
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

     
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>

        <p className="mt-4 text-gray-600 leading-7 flex-1 line-clamp-4">
          {description}
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
