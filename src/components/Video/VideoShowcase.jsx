import React, { useState } from "react";
import VideoCard from "./VideoCard";
import videoData from "../../data/Video/videoData";
 

export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor((videoData.length - 1) / 2)
  );
 
  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? videoData.length - 1 : i - 1));
 
  const goNext = () =>
    setActiveIndex((i) => (i === videoData.length - 1 ? 0 : i + 1));
 
  const handleCardClick = (index) => {
    if (index === activeIndex) {
      window.open(videoData[index].videoUrl, "_blank", "noopener,noreferrer");
    } else {
      setActiveIndex(index);
    }
  };
 
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="flex items-center justify-center gap-4">
        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md shrink-0"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-gray-600 stroke-2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
 
        {/* Cards row — sirf active ke aas paas 2-2 card dikhte hain */}
        <div className="flex items-end gap-3 overflow-hidden">
          {videoData.map((item, index) => {
            const distance = Math.min(
              Math.abs(index - activeIndex),
              videoData.length - Math.abs(index - activeIndex)
            );
            if (distance > 2) return null;
 
            return (
              <VideoCard
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                active={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            );
          })}
        </div>
 
        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md shrink-0"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-gray-600 stroke-2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
 