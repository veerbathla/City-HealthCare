import React from 'react'

const Welcome = () => {
  return (
    <div>
        {/* ================= WELCOME SECTION ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Images */}

      <div className="relative">

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/about-hospital.jpg"
            alt="City HealthCare Hospital"
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Floating Card */}

        <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 w-72">

          <h3 className="text-4xl font-bold text-[#0096D6]">
            24×7
          </h3>

          <p className="text-gray-600 mt-2">
            Emergency & Trauma Care with dedicated specialists always ready to
            serve.
          </p>

        </div>

      </div>

      {/* Right Content */}

      <div>

        <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm tracking-wide">
          ABOUT CITY HEALTHCARE
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 leading-tight">
          Welcome to
          <span className="text-[#0096D6]"> City HealthCare</span>
        </h2>

        <p className="mt-8 text-gray-600 leading-8 text-lg">
          Welcome to <strong>City HealthCare</strong>, Sirsa’s premier
          multispecialty healthcare destination where world-class medical
          innovation meets compassionate, patient-first care.
        </p>

        <p className="mt-6 text-gray-600 leading-8">
          Built on a foundation of clinical excellence, we bridge the gap
          between complex tertiary specialties and everyday wellness by bringing
          advanced medical services under one roof. Our integrated approach
          combines highly experienced specialists with cutting-edge technology,
          ensuring every patient receives timely, accurate, and personalized
          treatment.
        </p>

        <p className="mt-6 text-gray-600 leading-8">
          From life-saving trauma care and advanced diagnostics to minimally
          invasive surgeries and rehabilitation, our focus is to deliver
          comprehensive healthcare that prioritizes safety, precision, and
          compassion at every step of the healing journey.
        </p>

        {/* Feature Cards */}

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          <div className="bg-blue-50 rounded-2xl p-6">

            <h3 className="font-semibold text-xl text-gray-900">
              Elite In-House Collaboration
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Top specialists work together with our advanced diagnostics to
              provide faster decisions and seamless patient care.
            </p>

          </div>

          <div className="bg-cyan-50 rounded-2xl p-6">

            <h3 className="font-semibold text-xl text-gray-900">
              Advanced Infrastructure
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Fully equipped CT Scan, Digital X-Ray, Ultrasound, Pathology and
              Neurophysiology labs under one roof.
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

export default Welcome