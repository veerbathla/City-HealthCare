import React from 'react'
import {
  FaUserMd,
  FaHospital,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";
const HospitalHighlights = () => {
  return (
    <div>



{/* ================= HOSPITAL HIGHLIGHTS ================= */}

<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide">
        HOSPITAL HIGHLIGHTS
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
        Delivering Excellence
        <span className="text-[#0096D6]"> Every Single Day</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        City HealthCare is committed to providing advanced healthcare,
        integrated diagnostics, and compassionate treatment through a
        multidisciplinary team of specialists.
      </p>

    </div>

    {/* Stats */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-4xl">
          <FaUserMd />
        </div>

        <h3 className="text-5xl font-bold text-blue-700 mt-8">
          10+
        </h3>

        <h4 className="text-xl font-semibold mt-4 text-gray-900">
          Specialized Departments
        </h4>

        <p className="mt-3 text-gray-600">
          Comprehensive care across multiple medical specialties.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="w-20 h-20 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-4xl">
          <FaHospital />
        </div>

        <h3 className="text-5xl font-bold text-cyan-700 mt-8">
          100%
        </h3>

        <h4 className="text-xl font-semibold mt-4 text-gray-900">
          In-House Diagnostics
        </h4>

        <p className="mt-3 text-gray-600">
          Advanced imaging and pathology services under one roof.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 text-4xl">
          <FaClock />
        </div>

        <h3 className="text-5xl font-bold text-red-600 mt-8">
          24×7
        </h3>

        <h4 className="text-xl font-semibold mt-4 text-gray-900">
          Emergency Care
        </h4>

        <p className="mt-3 text-gray-600">
          Dedicated trauma and emergency medical support around the clock.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-500">

        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-4xl">
          <FaHeartbeat />
        </div>

        <h3 className="text-5xl font-bold text-green-600 mt-8">
          One
        </h3>

        <h4 className="text-xl font-semibold mt-4 text-gray-900">
          Complete Healthcare Destination
        </h4>

        <p className="mt-3 text-gray-600">
          Diagnosis, treatment, surgery, and rehabilitation in one place.
        </p>

      </div>

    </div>

    {/* Bottom Strip */}

    <div className="mt-20 bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 rounded-3xl p-10">

      <div className="grid lg:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-4xl font-bold text-white">24×7</h3>
          <p className="text-blue-100 mt-2">
            Emergency Services
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">10+</h3>
          <p className="text-blue-100 mt-2">
            Medical Departments
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">100%</h3>
          <p className="text-blue-100 mt-2">
            Patient-Focused Care
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">One Roof</h3>
          <p className="text-blue-100 mt-2">
            Integrated Healthcare
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  )
}

export default HospitalHighlights