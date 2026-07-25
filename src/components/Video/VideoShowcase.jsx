import React, { useEffect, useMemo, useRef, useState } from "react";
import VideoCard from "./VideoCard";
import videoData from "../../data/Video/videoData";

export default function VideoShowcase() {
  
  const MOBILE_BREAKPOINT = 768;
  const SWIPE_THRESHOLD = 50;
  const AUTO_PLAY_DELAY = 4500;

  
  const [activeIndex, setActiveIndex] = useState(0);

  
  const [visibleCards, setVisibleCards] = useState(5);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef(null);

 
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setVisibleCards(3);
      } else {
        setVisibleCards(5);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () =>
      window.removeEventListener("resize", updateVisibleCards);
  }, []);

  
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoData.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + videoData.length) % videoData.length
    );
  };

  
  const handleCardClick = (index) => {
    if (index === activeIndex) {
      window.open(
        videoData[index].videoUrl,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }

    setActiveIndex(index);
  };

 
  const getDistance = (index) => {
    const total = videoData.length;

    let distance = index - activeIndex;

    if (distance > total / 2) {
      distance -= total;
    }

    if (distance < -total / 2) {
      distance += total;
    }

    return distance;
  };

  
  const visibleItems = useMemo(() => {
    const limit = Math.floor(visibleCards / 2);

    return videoData
      .map((item, index) => ({
        ...item,
        index,
        distance: getDistance(index),
      }))
      .filter((item) => Math.abs(item.distance) <= limit)
      .sort((a, b) => a.distance - b.distance);
  }, [activeIndex, visibleCards]);

  
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > SWIPE_THRESHOLD) {
      goNext();
    }

    if (diff < -SWIPE_THRESHOLD) {
      goPrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  
  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, AUTO_PLAY_DELAY);

    return () => clearInterval(autoPlayRef.current);
  }, []);

  
    return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">

      <div className="mx-auto max-w-7xl px-4">
        {/* Section Heading */}
<div className="mb-12 text-center">
  <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold tracking-wide text-sky-600">
    Patient Stories
  </span>

  <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
    Our Reviews
  </h2>

  <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-sky-500"></div>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
    Hear directly from our patients about their healthcare journey, treatment
    experience, and the compassionate care they received at{" "}
    <span className="font-semibold text-sky-600">
      City Healthcare
    </span>.
  </p>
</div>

        <div className="flex items-center justify-center gap-3">

  
        
          <button
            onClick={goPrev}
            className="z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-gray-700"
              fill="none"
              strokeWidth="2"
            >
              <path
                d="M15 6L9 12L15 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

      

          <div
            className="
                relative
                overflow-hidden
                flex-1
                h-[340px]
                sm:h-[420px]
                lg:h-[560px]
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              perspective: "1600px",
            }}
          >
            {visibleItems.map((item) => (
              <VideoCard
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                active={item.distance === 0}
                distance={item.distance}
                position={item.distance}
                onClick={() => handleCardClick(item.index)}
              />
            ))}
          </div>

         

          <button
            onClick={goNext}
            className="z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-gray-700"
              fill="none"
              strokeWidth="2"
            >
              <path
                d="M9 6L15 12L9 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>

      </div>

    </section>
  );
}