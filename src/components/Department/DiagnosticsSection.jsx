import React from "react";
import {
  ScanLine,
  Microscope,
  Activity,
  Brain,
  TestTube2,
} from "lucide-react";

const icons = [
  ScanLine,
  Microscope,
  Activity,
  Brain,
  TestTube2,
];

const DiagnosticsSection = ({ diagnostics }) => {
  if (!diagnostics?.tests?.length) return null;

  return (
    <section className="py-2 bg-[#F8FCFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Diagnostics
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            {diagnostics.title}
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Accurate diagnosis is the foundation of effective treatment. Our
            advanced diagnostic facilities help specialists detect diseases
            quickly and develop personalized treatment plans.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {diagnostics.tests.map((test, index) => {

            const Icon = icons[index % icons.length];

            return (

              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:border-[#0096D6] transition-all duration-300"
              >

                <div className="h-14 w-14 rounded-xl bg-[#EAF7FD] flex items-center justify-center group-hover:bg-[#0096D6] transition">

                  <Icon
                    size={28}
                    className="text-[#0096D6] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#103B50]">
                  {test.name}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {test.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
};

export default DiagnosticsSection;