import React from "react";
import DepartmentCard from "../components/DepartmentCard";

import { departments } from "../data/departments";
import { doctorDepartments } from "../data/doctorDepartments";

const Departments = () => {
  const allDepartments = [
    // Doctor Departments
    doctorDepartments.find((d) => d.slug === "neurosurgery"),

    // Full Departments
    departments.find((d) => d.slug === "obstetrics-gynaecology"),
    departments.find((d) => d.slug === "orthopaedics"),

    // Doctor Departments
    doctorDepartments.find((d) => d.slug === "internal-medicine"),
    doctorDepartments.find(
      (d) => d.slug === "maxillo-facial-and-dental"
    ),
    doctorDepartments.find((d) => d.slug === "plastic-surgery"),
    doctorDepartments.find((d) => d.slug === "physiotherapy"),
    doctorDepartments.find(
      (d) => d.slug === "general-laparoscopic-surgery"
    ),
    doctorDepartments.find((d) => d.slug === "anaesthesiology"),

    // Full Departments
    departments.find((d) => d.slug === "pathology"),
    departments.find(
      (d) => d.slug === "radiology-clinical-imaging"
    ),

    // Doctor Department
    doctorDepartments.find(
      (d) => d.slug === "endocrinology-metabolism"
    ),

    // Full Department
    departments.find(
      (d) =>
        d.slug ===
        "neuro-investigation-clinical-neurophysiology"
    ),
  ].filter(Boolean);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0096D6] to-cyan-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Our Medical Departments
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-8">
            Explore our specialized departments led by experienced
            consultants and supported by modern technology to
            provide comprehensive healthcare under one roof.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[#0096D6] font-semibold uppercase tracking-widest">
            Excellence In Healthcare
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Find the Right Department
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Our multidisciplinary departments work together to
            deliver advanced diagnosis, personalized treatment,
            and compassionate care for every patient.
          </p>
        </div>
      </section>

      {/* Department Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allDepartments.map((department) => (
              <DepartmentCard
                key={`${department.id}-${department.slug}`}
                department={department}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0096D6] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold">
            Need Help Choosing a Department?
          </h2>

          <p className="mt-5 text-lg text-white/90 leading-8">
            Our team is here to guide you to the right specialist
            and ensure you receive the best possible care.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center mt-10 px-8 py-4 rounded-full bg-white text-[#0096D6] font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Departments;