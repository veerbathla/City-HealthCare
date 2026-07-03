import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";

const ConditionsSection = ({ conditions = [] }) => {
  if (conditions.length === 0) return null;

  return (
    <section className="py-20 bg-[#F8FCFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Conditions
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            Conditions We Treat
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Our specialists diagnose and treat a wide range of medical
            conditions using evidence-based medicine, advanced diagnostics, and
            personalized treatment plans.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {conditions.map((condition, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-[#0096D6] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">

                <div className="h-12 w-12 rounded-xl bg-[#EAF7FD] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0096D6]">
                  <ShieldCheck
                    size={24}
                    className="text-[#0096D6] group-hover:text-white"
                  />
                </div>

                <ArrowRight
                  size={18}
                  className="text-gray-400 transition-colors duration-300 group-hover:text-[#0096D6]"
                />

              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#103B50] leading-7">
                {condition}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ConditionsSection;