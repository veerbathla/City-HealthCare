import React, { useState, useRef } from "react";
import VideoCard from "./VideoCard";
import videoData from "../../data/Video/videoData";

/* ------------------------------------------------------------------
   VideoShowcase.jsx

   MOBILE CLICK FIX — kya galat tha:
   1) VideoCard ab "position: absolute" use karta hai (left-1/2 top-1/2).
      Iske liye parent container ka "position: relative" hona ZAROORI hai,
      warna cards body/kisi aur ancestor ke hisaab se position hote hain
      aur unka asli clickable area screen pe kahi aur chala jata hai —
      isliye tap kaam nahi karta tha. Ab container ko relative + fixed
      height diya hai.
   2) Swipe aur click dono touch se aate hain. Pehle agar finger thoda
      sa bhi hilta tha (swipe try karte waqt), to click bhi fire ho
      jata tha aur galat card khul jata / kabhi kabhi kuch nahi hota
      tha. Ab "isDragging" flag se decide karte hain — agar swipe
      hua hai to us tap ko click nahi maanenge.
------------------------------------------------------------------- */
export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor((videoData.length - 1) / 2)
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? videoData.length - 1 : i - 1));

  const goNext = () =>
    setActiveIndex((i) => (i === videoData.length - 1 ? 0 : i + 1));

  const handleCardClick = (index) => {
    // agar abhi-abhi swipe kiya tha, to is tap ko ignore karo
    if (isDragging.current) return;

    if (index === activeIndex) {
      window.open(videoData[index].videoUrl, "_blank", "noopener,noreferrer");
    } else {
      setActiveIndex(index);
    }
  };

  // ---- swipe handlers ----
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    // 10px se zyada hile to ye swipe hai, tap nahi
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

        {/* Cards stage — "relative" + fixed height zaroori hai kyunki
            VideoCard ke andar "absolute" positioning hai */}
        <div
          className="relative w-full max-w-[1100px] h-[250px] sm:h-[320px] lg:h-[430px] touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {videoData.map((item, index) => {
            // circular signed distance nikalna (-2 se +2 tak, wrap-around ke saath)
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