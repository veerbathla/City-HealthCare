import React from 'react'
import {
  FaBrain,
  FaXRay,
  FaFlask,
  FaCheckCircle,
} from "react-icons/fa";
const AdvancedInfrastructure = () => {
  return (
    <div>


{/* ================= ADVANCED INFRASTRUCTURE ================= */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm tracking-wide">
        ADVANCED INFRASTRUCTURE
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
        Everything You Need
        <span className="text-[#0096D6]"> Under One Roof</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Accurate treatment starts with accurate diagnosis. Our hospital is
        equipped with a fully integrated diagnostic ecosystem that delivers
        rapid, reliable, and precise medical reports—without the need to visit
        multiple centers.
      </p>

    </div>

    {/* Cards */}

    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {/* Neurophysiology */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-700 group-hover:text-white transition">

          <FaBrain />

        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Neurophysiology Lab
        </h3>

        <p className="text-gray-600 leading-7 mt-5">
          Advanced neurological testing for precise diagnosis of brain,
          spinal cord, muscle, and nerve disorders using modern
          neurophysiology equipment.
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            NCV (Nerve Conduction Velocity)
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            EEG (Brain Activity Monitoring)
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            EMG, VEP & BERA Testing
          </div>

        </div>

      </div>

      {/* Radiology */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-4xl mb-8 group-hover:bg-cyan-700 group-hover:text-white transition">

          <FaXRay />

        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Radiology Wing
        </h3>

        <p className="text-gray-600 leading-7 mt-5">
          High-speed imaging technologies enable doctors to diagnose
          conditions quickly and accurately, supporting faster treatment
          decisions.
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            High-Speed CT Scan
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Digital X-Ray Imaging
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Advanced Ultrasound Services
          </div>

        </div>

      </div>

      {/* Pathology */}

      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

        <div className="w-20 h-20 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-4xl mb-8 group-hover:bg-green-700 group-hover:text-white transition">

          <FaFlask />

        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Automated Pathology Lab
        </h3>

        <p className="text-gray-600 leading-7 mt-5">
          Our fully automated pathology laboratory provides rapid,
          high-precision blood profiling, hormonal analysis, and
          diagnostic investigations for timely clinical decisions.
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Blood & Urine Analysis
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Hormonal Assays
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Fast & Accurate Reports
          </div>

        </div>

      </div>

    </div>

    {/* Bottom Banner */}

    <div className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700">

      <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-14">

        <div>

          <h3 className="text-3xl lg:text-4xl font-bold text-white">
            Precision Diagnostics. Faster Recovery.
          </h3>

          <p className="text-blue-100 leading-8 mt-5">
            With all essential diagnostic services available within the
            hospital, patients benefit from quicker investigations, faster
            reports, and immediate treatment planning—saving valuable time
            during every stage of care.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-white">100%</h4>
            <p className="text-blue-100 mt-2">
              In-House Diagnostics
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-white">24×7</h4>
            <p className="text-blue-100 mt-2">
              Emergency Support
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-white">Fast</h4>
            <p className="text-blue-100 mt-2">
              Report Generation
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-white">One Roof</h4>
            <p className="text-blue-100 mt-2">
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

export default AdvancedInfrastructure