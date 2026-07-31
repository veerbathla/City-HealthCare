import React, { useRef, useState } from "react";
import VideoCard from "../Video/VideoCard";
import csrData from "../../data/CSR/csrData";

export default function CSRShowcase() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor((csrData.length - 1) / 2)
  );

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? csrData.length - 1 : i - 1));

  const goNext = () =>
    setActiveIndex((i) => (i === csrData.length - 1 ? 0 : i + 1));

  const handleCardClick = (index) => {
    if (isDragging.current) return;

    if (index === activeIndex) {
      window.open(
        csrData[index].videoUrl,
        "_blank",
        "noopener,noreferrer"
      );
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

    if (diff > 40) goNext();
    else if (diff < -40) goPrev();

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const total = csrData.length;
  const half = Math.floor(total / 2);

  return (
    <section className="bg-gradient-to-b from-white via-sky-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
            Community First
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            CSR &
            <span className="text-[#0096D6]">
              {" "}Social Activities
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At <strong>City HealthCare Neuro Research & Infertility Centre,
            Sirsa</strong>, healthcare extends beyond hospital walls.
            Through awareness campaigns, blood donation drives, medical camps,
            school health programs and emergency support, we strive to build
            a healthier community.
          </p>
        </div>

        {/* Initiatives */}

        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Our Social Initiatives
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            Every initiative reflects our commitment towards preventive
            healthcare, education and compassionate community service.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Free Health Check-up Camps",
              "Blood Donation Camps",
              "Stroke & Brain Health Awareness",
              "Women's Health & Infertility Awareness",
              "Anti-Drug Awareness Campaigns",
              "School & College Health Education",
              "Disaster & Emergency Relief",
              "Public Awareness Campaigns",
              "Health Talks & Educational Seminars",
              "Support for Underprivileged Patients",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-[#0096D6]" />

                  <p className="font-medium leading-7 text-gray-700">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}

        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Glimpses of Our CSR Activities
          </h3>

          <p className="mb-12 mt-4 text-center text-gray-600">
            Click the active card to watch the complete video.
          </p>

          <div className="flex items-center justify-center gap-4">

            <button
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-white shadow transition hover:bg-[#0096D6] hover:text-white"
            >
              ❮
            </button>

            <div
              className="relative h-[260px] w-full max-w-[1100px] touch-pan-y sm:h-[340px] lg:h-[440px]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {csrData.map((item, index) => {
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

            <button
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-white shadow transition hover:bg-[#0096D6] hover:text-white"
            >
              ❯
            </button>

          </div>
        </div>

        {/* Quote */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-[#0096D6] to-[#0078B7] px-8 py-16 text-center">

          <h3 className="text-4xl font-bold text-white">
            Healthcare Beyond Hospital Walls
          </h3>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/90">
            "We don't just treat patients—we strengthen communities.
            Every health camp, awareness drive, blood donation initiative,
            and outreach program reflects our commitment to creating
            a healthier and happier future for everyone."
          </p>

        </div>

      </div>
    </section>
  );
}