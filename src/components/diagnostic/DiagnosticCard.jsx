import React from "react";
import { ArrowUpRight } from "lucide-react";

const DiagnosticCard = ({ service }) => {
  const { image, title, description, bookingLink } = service;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col h-[220px]">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
            {description}
          </p>
        </div>

        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0096D6] px-5 py-3 font-semibold text-white transition hover:bg-[#007bb3]"
        >
          Book Test
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default DiagnosticCard;