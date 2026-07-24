import React from 'react'
import {
  FaAmbulance,
  FaMicroscope,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import aboutt1 from "../../assets/about/aboutt1.jpg";
import aboutt2 from "../../assets/about/aboutt2.jpg";
import aboutt3 from "../../assets/about/aboutt3.jpg";
const Pillars = () => {
  return (
    <div>

{/* ================= PILLARS OF OUR CARE ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
        THE PILLARS OF OUR CARE
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
        Excellence in Every Step of
        <span className="text-[#0096D6]"> Your Healing Journey</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        At City HealthCare, our commitment goes beyond treatment. Every service
        is built on rapid response, advanced technology, and seamless
        collaboration between specialists to ensure the highest quality of care.
      </p>

    </div>

    {/* Cards */}

    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {/* Card 1 */}

      <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white border">

        <div className="w-full h-60 flex items-center justify-center bg-gray-50 overflow-hidden">
  <img
    src={aboutt1}
    alt="Trauma Center"
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-700"
  />
</div>

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl mb-6">
            <FaAmbulance />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            World-Class 24×7 Trauma Center
          </h3>

          <p className="text-gray-600 leading-7 mt-5">
            Every second matters during an emergency. Our rapid-response trauma
            center is equipped to handle severe injuries with coordinated care
            from Neurosurgery, Orthopaedics, Plastic Surgery, and Maxillofacial
            Surgery specialists.
          </p>

          <ul className="mt-6 space-y-3">

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Golden Hour Emergency Response
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              24×7 Specialist Availability
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Advanced Surgical Support
            </li>

          </ul>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white border">

        <div className="w-full h-60 flex items-center justify-center bg-gray-50 overflow-hidden">
  <img
    src={aboutt2}
    alt="Trauma Center"
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-700"
  />
</div>

        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl mb-6">
            <FaMicroscope />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            Advanced Diagnostic Infrastructure
          </h3>

          <p className="text-gray-600 leading-7 mt-5">
            We provide complete in-house diagnostics including CT Scan,
            Digital X-Ray, Ultrasound, Neurophysiology Lab, and Automated
            Pathology to ensure fast and accurate diagnosis.
          </p>

          <ul className="mt-6 space-y-3">

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Neurophysiology Lab
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Digital Imaging Services
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Fully Automated Pathology
            </li>

          </ul>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white border">

       <div className="w-full h-60 flex items-center justify-center bg-gray-50 overflow-hidden">
  <img
    src={aboutt3}
    alt="Trauma Center"
    className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-700"
  />
</div>
        <div className="p-8">

          <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-3xl mb-6">
            <FaUsers />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            Elite In-House Collaboration
          </h3>

          <p className="text-gray-600 leading-7 mt-5">
            Our specialists work together under one roof, ensuring faster
            decisions, seamless coordination, and comprehensive treatment
            without unnecessary referrals or delays.
          </p>

          <ul className="mt-6 space-y-3">

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Multidisciplinary Team
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Faster Clinical Decisions
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Complete Care Under One Roof
            </li>

          </ul>

        </div>

      </div>

    </div>

    {/* Bottom Quote */}

    <div className="mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 p-12 text-center">

      <h3 className="text-3xl font-bold text-white">
        "Where Expertise Meets Compassion."
      </h3>

      <p className="text-blue-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
        Every diagnosis, every treatment plan, and every recovery journey at
        City HealthCare is driven by one mission—to provide exceptional
        healthcare with precision, empathy, and unwavering commitment to our
        patients.
      </p>


    </div>

  </div>
</section>

    </div>
  )
}

export default Pillars