import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DiagnosticCard from "./DiagnosticCard";
import { diagnosticServices } from "../../data/diagnostic/diagnosticServices";

const DiagnosticSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % diagnosticServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % diagnosticServices.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + diagnosticServices.length) %
        diagnosticServices.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
            Diagnostics
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Advanced Diagnostic
            <span className="text-[#0096D6]"> Services</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Accurate diagnosis is the foundation of effective treatment.
            City HealthCare offers modern diagnostic facilities with
            advanced technology and expert professionals to ensure
            reliable, timely, and precise results for every patient.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {diagnosticServices.map((service) => (
            <DiagnosticCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Mobile Slider */}
<div className="md:hidden">
  <DiagnosticCard service={diagnosticServices[current]} />

  {/* Navigation */}
  <div className="flex items-center justify-center gap-6 mt-5">
    <button
      onClick={prevSlide}
      className="w-9 h-9 rounded-full border border-gray-300 text-gray-700 hover:bg-[#0096D6] hover:text-white transition"
    >
      <ChevronLeft size={18} className="mx-auto" />
    </button>

    {/* Dots */}
    <div className="flex items-center gap-2">
      {diagnosticServices.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`transition-all rounded-full ${
            current === index
              ? "w-6 h-2 bg-[#0096D6]"
              : "w-2 h-2 bg-gray-300"
          }`}
        />
      ))}
    </div>

    <button
      onClick={nextSlide}
      className="w-9 h-9 rounded-full border border-gray-300 text-gray-700 hover:bg-[#0096D6] hover:text-white transition"
    >
      <ChevronRight size={18} className="mx-auto" />
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default DiagnosticSection;