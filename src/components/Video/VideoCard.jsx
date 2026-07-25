import React from "react";

export default function VideoCard({ thumbnail, title = "", active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative shrink-0 cursor-pointer rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        ${active
          ? "w-[260px] h-[380px] scale-100 opacity-100 z-10"
          : "w-[190px] h-[330px] scale-95 opacity-60"}
      `}
    >
      {/* Thumbnail image */}
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
 
      {/* halka overlay taaki play button clearly dikhe */}
      <div className="absolute inset-0 bg-black/10" />
 
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full bg-white shadow-md
            ${active ? "w-16 h-16" : "w-10 h-10"}`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`${active ? "w-6 h-6" : "w-4 h-4"} text-teal-600 fill-current`}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}