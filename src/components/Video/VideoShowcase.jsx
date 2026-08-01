import React, { useState, useRef } from "react";
import VideoCard from "./VideoCard";
import videoData from "../../data/Video/videoData";

export default function VideoShowcase() {
   const initialIndex = videoData.findIndex((item) => item.id === 3);

const [activeIndex, setActiveIndex] = useState(
  initialIndex !== -1 ? initialIndex : Math.floor(videoData.length / 2)
);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? videoData.length - 1 : i - 1));

  const goNext = () =>
    setActiveIndex((i) => (i === videoData.length - 1 ? 0 : i + 1));

  const handleCardClick = (index) => {
    
    if (isDragging.current) return;

    if (index === activeIndex) {
      window.open(videoData[index].videoUrl, "_blank", "noopener,noreferrer");
    } else {
      setActiveIndex(index);
    }
  };

  
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 40;

    if (diff > swipeThreshold) {
      goNext(); // left swipe -> next
    } else if (diff < -swipeThreshold) {
      goPrev(); // right swipe -> prev
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const total = videoData.length;
  const half = Math.floor(total / 2);

  return (
  <section className="w-full py-6 sm:py-10 bg-gray-50 overflow-hidden">
    {/* Heading */}
    <div className="text-center mb-6 sm:mb-10 px-4">
      <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#0096D6] uppercase mb-2">
        What our happy Patients say
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Real Reviews, <span className="text-[#0096D6]">Real Experiences</span>
      </h2>
      <div className="w-16 h-1 bg-[#0096D6] mx-auto mt-3 rounded-full" />
    </div>

    <div className="flex items-center justify-center gap-2 sm:gap-4 px-2">
      {/* Prev arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous"
        className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md shrink-0 z-30"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-gray-600 stroke-2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-[1100px] h-[250px] sm:h-[320px] lg:h-[430px] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {videoData.map((item, index) => {
          let distance = index - activeIndex;
          if (distance > half) distance -= total;
          if (distance < -half) distance += total;

          if (Math.abs(distance) > 2) return null;

          return (
            <VideoCard
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              active={index === activeIndex}
              distance={distance}
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>

      {/* Next arrow */}
      <button
        onClick={goNext}
        aria-label="Next"
        className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md shrink-0 z-30"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-gray-600 stroke-2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </section>
);
}