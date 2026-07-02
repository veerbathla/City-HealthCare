import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
   
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/about-hero.jpg"
          alt="City HealthCare"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B]/95 via-[#004B8D]/80 to-[#0E7490]/60"></div>

        {/* Decorative Blur */}
        <div className="absolute top-24 right-20 w-80 h-80 bg-cyan-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white mb-8">
            <FaCheckCircle className="text-cyan-300" />
            <span className="text-sm tracking-wide">
              Trusted Multispecialty Hospital in Sirsa
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white max-w-4xl">

            Compassion Meets
            <br />

            <span className="text-cyan-300">
              Advanced Healthcare
            </span>

          </h1>

          {/* Paragraph */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-blue-100">

            Welcome to <strong>City HealthCare</strong>, Sirsa's premier
            multispecialty healthcare destination where world-class medical
            innovation meets compassionate, patient-first care. Our elite team
            of specialists, advanced diagnostics, and integrated treatment
            approach ensure exceptional care for every patient under one roof.

          </p>

          {/* Features */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 max-w-4xl">

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg">
                24×7 Trauma Care
              </h3>
              <p className="text-blue-100 mt-2 text-sm">
                Rapid emergency response with multidisciplinary specialists.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg">
                Advanced Diagnostics
              </h3>
              <p className="text-blue-100 mt-2 text-sm">
                CT Scan, Digital X-Ray, Ultrasound, NCV, EEG, EMG and more.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-lg">
                Expert Specialists
              </h3>
              <p className="text-blue-100 mt-2 text-sm">
                Dedicated consultants delivering comprehensive care.
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/appointment"
              className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-7 py-4 rounded-xl transition-all duration-300"
            >
              Book Appointment
              <FaArrowRight />
            </Link>

            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-3 border border-white/30 backdrop-blur-md hover:bg-white hover:text-slate-900 text-white px-7 py-4 rounded-xl transition-all duration-300"
            >
              <FaPhoneAlt />
              Emergency Contact
            </a>

          </div>

        </div>

        {/* Bottom Curve */}

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 160"
            className="w-full text-white fill-current"
          >
            <path d="M0,96L80,101.3C160,107,320,117,480,122.7C640,128,800,128,960,106.7C1120,85,1280,43,1360,21.3L1440,0L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
          </svg>
        </div>

      </section>

      {/* NEXT SECTION STARTS HERE */}

    </div>
  );
};


export default Hero