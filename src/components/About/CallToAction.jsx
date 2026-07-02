import React from 'react'
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaPhoneAlt,
  FaHeartbeat,
} from "react-icons/fa";
const CallToAction = () => {
  return (
    <div>



{/* ================= FINAL CALL TO ACTION ================= */}

<section className="relative py-24 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#003B73] via-[#005EA8] to-[#00A6C8]"></div>

  {/* Decorative Blur */}

  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 lg:p-16">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-cyan-200 text-sm font-semibold tracking-wide">
            YOUR HEALTH MATTERS
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-8 leading-tight">
            Your Journey to Better
            <span className="text-cyan-300">
              {" "}Health Starts Here
            </span>
          </h2>

          <p className="mt-8 text-blue-100 text-lg leading-8">
            Whether you need expert consultation, emergency care,
            advanced diagnostics, or specialized treatment,
            City HealthCare is committed to providing compassionate,
            comprehensive healthcare for you and your family.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/appointment"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-slate-100 transition"
            >
              <FaCalendarCheck />
              Book Appointment
            </Link>

            <a
              href="tel:+911234567890"
              className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-white hover:text-blue-700 transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">

            <FaHeartbeat className="text-5xl text-red-500 mx-auto" />

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              24×7
            </h3>

            <p className="text-gray-600 mt-2">
              Emergency Support
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">

            <FaCalendarCheck className="text-5xl text-blue-700 mx-auto" />

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              Easy
            </h3>

            <p className="text-gray-600 mt-2">
              Appointment Booking
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">

            <FaPhoneAlt className="text-5xl text-green-600 mx-auto" />

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              Expert
            </h3>

            <p className="text-gray-600 mt-2">
              Medical Consultation
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">

            <FaArrowRight className="text-5xl text-cyan-700 mx-auto" />

            <h3 className="text-3xl font-bold text-gray-900 mt-6">
              One Roof
            </h3>

            <p className="text-gray-600 mt-2">
              Complete Healthcare
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  )
}

export default CallToAction