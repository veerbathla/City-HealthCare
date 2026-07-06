import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaHeartbeat,
  FaHospitalAlt,
} from "react-icons/fa";
import { departments } from "../data/departments";

const Speciality = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-r from-[#0096D6] to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">
            <div className="bg-white/20 h-20 w-20 rounded-full flex items-center justify-center">
              <FaHospitalAlt className="text-4xl" />
            </div>
          </div>

          <h1 className="text-5xl font-bold">
            Our Medical Specialities
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-8">
            We provide comprehensive healthcare through our specialized
            departments staffed by experienced doctors, advanced technology,
            and patient-focused care.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-[#0096D6] font-semibold uppercase tracking-widest">
            Excellence in Healthcare
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Departments Designed Around Your Health
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Every department is equipped with modern medical facilities,
            experienced consultants, compassionate nursing staff, and advanced
            diagnostic support to ensure the highest quality of treatment for
            every patient.
          </p>
        </div>
      </section>

      {/* ================= DEPARTMENT GRID ================= */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {departments.map((dept) => (

              <div
                key={dept.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                {/* Image */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={dept.hero.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <div className="bg-[#0096D6] text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg">

                      <FaHeartbeat />

                    </div>

                  </div>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {dept.name}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7 line-clamp-4">
                    {dept.overview.description}
                  </p>

                  <Link
                    to={`/speciality/${dept.slug}`}
                    className="mt-8 inline-flex items-center gap-3 bg-[#0096D6] hover:bg-cyan-700 text-white px-6 py-3 rounded-full transition"
                  >
                    Explore Department

                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </Link>

                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#0096D6] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold">
            Looking for the Right Specialist?
          </h2>

          <p className="mt-5 text-white/90 text-lg leading-8">
            Our multidisciplinary team of doctors works together to provide
            accurate diagnosis, advanced treatment, and compassionate care for
            every patient.
          </p>

          <Link
            to="/appointment"
            className="inline-flex items-center gap-3 mt-10 bg-white text-[#0096D6] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
          >
            Book an Appointment

            <FaArrowRight />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Speciality;