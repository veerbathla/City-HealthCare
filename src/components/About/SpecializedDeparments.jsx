import React from 'react'
import {
  FaBrain,
  FaBaby,
  FaBone,
  FaStethoscope,
  FaHandHoldingMedical,
  FaTooth,
  FaProcedures,
  FaWalking,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
const SpecializedDeparments = () => {

  const Navigate=useNavigate();
  return (
    <div>



{/* ================= SPECIALIZED DEPARTMENTS ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide">
        SPECIALIZED DEPARTMENTS
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
        Comprehensive Healthcare
        <span className="text-[#0096D6]"> Across Every Specialty</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Our multidisciplinary team delivers advanced medical care through
        specialized departments equipped with experienced consultants,
        modern technology, and patient-focused treatment protocols.
      </p>

    </div>

    {/* Departments */}

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

      {/* Neurosurgery */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl group-hover:bg-blue-700 group-hover:text-white transition">
          <FaBrain />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Neurosurgery & Spine
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Advanced brain, spine, trauma, and minimally invasive endoscopic
          spine surgeries with precision and safety.
        </p>

      </div>

      {/* Gynaecology */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-pink-500 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-3xl group-hover:bg-pink-600 group-hover:text-white transition">
          <FaBaby />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Obstetrics & Gynaecology
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          High-risk pregnancy management, infertility care, maternity,
          women's wellness, and advanced gynecological treatments.
        </p>

      </div>

      {/* Orthopaedics */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-3xl group-hover:bg-green-700 group-hover:text-white transition">
          <FaBone />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Orthopaedics
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Joint replacement, sports injuries, trauma care, fracture
          management, and advanced orthopedic surgeries.
        </p>

      </div>

      {/* Medicine */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl group-hover:bg-red-600 group-hover:text-white transition">
          <FaStethoscope />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          General Medicine
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Diagnosis and treatment of lifestyle disorders, infectious diseases,
          chronic illnesses, and emergency medical conditions.
        </p>

      </div>

      {/* Plastic */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-cyan-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-3xl group-hover:bg-cyan-700 group-hover:text-white transition">
          <FaHandHoldingMedical />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Plastic Surgery
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Reconstructive surgery, cosmetic procedures, burn management,
          microvascular reconstruction, and limb salvage.
        </p>

      </div>

      {/* Maxillofacial */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-yellow-500 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-3xl group-hover:bg-yellow-500 group-hover:text-white transition">
          <FaTooth />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Oral & Maxillofacial
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Facial trauma reconstruction, jaw surgeries, dental implants,
          and complex oral surgical procedures.
        </p>

      </div>

      {/* General Surgery */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-3xl group-hover:bg-indigo-700 group-hover:text-white transition">
          <FaProcedures />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          General Surgery
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Laparoscopic surgeries, hernia repair, abdominal procedures,
          and minimally invasive surgical treatments.
        </p>

      </div>

      {/* Physiotherapy */}

      <div className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-2xl transition-all duration-500">

        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl group-hover:bg-emerald-700 group-hover:text-white transition">
          <FaWalking />
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Physiotherapy
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Rehabilitation programs for neurological disorders,
          orthopedic recovery, post-surgical care, and mobility restoration.
        </p>

      </div>

    </div>

    {/* Bottom CTA */}

    <div className="mt-20 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

      <div>

        <h3 className="text-3xl font-bold text-white">
          Expert Care Across Multiple Specialties
        </h3>

        <p className="text-blue-100 mt-4 max-w-2xl leading-8">
          Whether it's emergency care, advanced surgery, maternity,
          rehabilitation, or preventive healthcare, our specialists work
          together to deliver personalized treatment under one roof.
        </p>

      </div>

      <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-slate-100 transition" onClick={()=>{
        Navigate('/speciality');
      }}>
      
        Explore All Departments

        <FaArrowRight />

      </button>

    </div>

  </div>
</section>

    </div>
  )
}

export default SpecializedDeparments