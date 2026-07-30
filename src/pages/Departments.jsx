import React from "react";
import DepartmentCard from "../components/DepartmentCard";

import { departments } from "../data/departments";
import { doctorDepartments } from "../data/doctorDepartments";

import hero3 from "../assets/hero/hero3.jpg";

const Departments = () => {
  const mergedDepartments = [...doctorDepartments, ...departments];

  const order = [
    "neurosurgery",
    "obstetrics-gynaecology",
    "orthopaedics",
    "internal-medicine",
    "plastic-surgery",
    "maxillo-facial-and-dental",
    "physiotherapy",
    "anaesthesiology",
    "general-laparoscopic-surgery",
    "endocrinology",
    "radiology-clinical-imaging",
    "pathology",
    "neurology",
    "neuro-investigation-clinical-neurophysiology",
  ];

  const allDepartments = order
    .map((slug) =>
      mergedDepartments.find((department) => department.slug === slug)
    )
    .filter(Boolean);


  return (
    <main className="bg-gray-50 min-h-screen">
     
   <section className="relative w-full bg-black flex items-center justify-center">
  <img
    src={hero3}
    alt="Our Departments"
    className="w-full h-auto max-h-[650px] object-contain"
  />

  <div className="absolute inset-0 bg-black/35"></div>

  <div className="absolute inset-0 flex items-center justify-center px-6">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center">
      Our Departments
    </h1>
  </div>
</section>

      
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
            className="inline-flex items-center mt-10 px-8 py-4 rounded-full bg-white text-[#0096D6] font-semibold hover:bg-gray-100 transition">
          
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Departments;