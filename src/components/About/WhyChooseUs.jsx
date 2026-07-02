import React from 'react'
import {
  FaUserMd,
  FaHeartbeat,
  FaMicroscope,
  FaHospital,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div>


{/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
        WHY CHOOSE US
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
        Healthcare Built Around
        <span className="text-[#0096D6]"> Trust, Technology & Compassion</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        At City HealthCare, we combine experienced specialists, advanced
        technology, and compassionate care to deliver exceptional healthcare
        under one roof. Every patient receives personalized attention,
        accurate diagnosis, and coordinated treatment for the best possible
        outcomes.
      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      {/* Card 1 */}

      <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-3xl group-hover:bg-blue-700 group-hover:text-white transition">

          <FaUserMd />

        </div>

        <h3 className="text-2xl font-bold mt-6 text-gray-900">
          Expert Specialists
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Highly experienced consultants from multiple specialties collaborate
          to provide personalized and evidence-based treatment for every
          patient.
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 text-3xl group-hover:bg-cyan-700 group-hover:text-white transition">

          <FaMicroscope />

        </div>

        <h3 className="text-2xl font-bold mt-6 text-gray-900">
          Advanced Diagnostics
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          In-house CT Scan, Digital X-Ray, Ultrasound, Neurophysiology, and
          automated Pathology ensure faster diagnosis and immediate treatment.
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-3xl group-hover:bg-green-700 group-hover:text-white transition">

          <FaHeartbeat />

        </div>

        <h3 className="text-2xl font-bold mt-6 text-gray-900">
          24×7 Emergency Care
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Our emergency and trauma team is available round-the-clock to provide
          rapid medical attention during the critical golden hour.
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 text-3xl group-hover:bg-purple-700 group-hover:text-white transition">

          <FaShieldAlt />

        </div>

        <h3 className="text-2xl font-bold mt-6 text-gray-900">
          Patient-First Care
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Every decision we make is centered around patient safety, comfort,
          transparency, and long-term well-being for individuals and families.
        </p>

      </div>

    </div>

    {/* Bottom Banner */}

    <div className="mt-20 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-10 lg:p-14">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div>

          <h3 className="text-3xl font-bold text-white">
            One Hospital. Every Specialty. Complete Care.
          </h3>

          <p className="text-blue-100 mt-4 max-w-2xl leading-8">
            From emergency care and diagnostics to complex surgeries and
            rehabilitation, City HealthCare delivers comprehensive healthcare
            services with precision, innovation, and compassion—all under one
            roof.
          </p>

        </div>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-slate-100 transition">

          Explore Departments

          <FaArrowRight />

        </button>

      </div>

    </div>

  </div>
</section>

    </div>
  )
}

export default WhyChooseUs