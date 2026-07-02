import React from 'react'
import {
  FaShieldAlt,
  FaHeart,
  FaUserMd,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";
const OurPromises = () => {
  return (
    <div>


{/* ================= OUR PROMISE ================= */}

<section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 relative overflow-hidden">

  {/* Background Blur */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur-md">
        THE CITY HEALTHCARE PROMISE
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
        More Than a Hospital,
        <br />
        <span className="text-cyan-300">
          We Are Your Healthcare Partner
        </span>
      </h2>

      <p className="mt-8 text-lg text-blue-100 leading-8">
        At City HealthCare, every patient is treated with compassion,
        dignity, and respect. Our promise is to combine world-class
        technology, experienced specialists, and personalized care
        to support you and your family through every stage of life.
      </p>

    </div>

    {/* Promise Cards */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      {/* Card */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition">

        <FaHeart className="text-5xl text-cyan-300 mb-6" />

        <h3 className="text-2xl font-bold text-white">
          Compassion
        </h3>

        <p className="mt-4 text-blue-100 leading-7">
          We understand that healing begins with empathy. Every patient
          receives personalized attention and genuine care.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition">

        <FaUserMd className="text-5xl text-cyan-300 mb-6" />

        <h3 className="text-2xl font-bold text-white">
          Clinical Excellence
        </h3>

        <p className="mt-4 text-blue-100 leading-7">
          Our experienced consultants use evidence-based medicine,
          modern technology, and teamwork to deliver outstanding care.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition">

        <FaShieldAlt className="text-5xl text-cyan-300 mb-6" />

        <h3 className="text-2xl font-bold text-white">
          Safety & Trust
        </h3>

        <p className="mt-4 text-blue-100 leading-7">
          Every treatment follows the highest standards of safety,
          transparency, and ethical medical practice.
        </p>

      </div>

      {/* Card */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition">

        <FaHandsHelping className="text-5xl text-cyan-300 mb-6" />

        <h3 className="text-2xl font-bold text-white">
          Lifelong Support
        </h3>

        <p className="mt-4 text-blue-100 leading-7">
          From diagnosis to recovery, rehabilitation, and follow-up,
          we remain by your side throughout your healthcare journey.
        </p>

      </div>

    </div>

    {/* Quote Box */}

    <div className="mt-20 bg-white rounded-3xl p-10 lg:p-14">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <h3 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Commitment to Every Patient
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            We believe healthcare is more than treating illnesses.
            It is about building trust, restoring hope, and helping
            people live healthier and happier lives through
            compassionate, patient-centered care.
          </p>

        </div>

        <div className="space-y-5">

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <span className="text-gray-700">
              Comprehensive care under one roof.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <span className="text-gray-700">
              Highly experienced multidisciplinary specialists.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <span className="text-gray-700">
              Advanced technology with precise diagnostics.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <span className="text-gray-700">
              Compassionate care focused on every patient and family.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <span className="text-gray-700">
              Dedicated support from consultation to complete recovery.
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </div>
  )
}

export default OurPromises