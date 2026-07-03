import React from "react";
import {
  CheckCircle2,
  Shield,
  Building2,
  HeartPulse,
  Microscope,
  Activity,
  ScanLine,
  Stethoscope,
} from "lucide-react";

const icons = [
  CheckCircle2,
  Shield,
  Building2,
  HeartPulse,
  Microscope,
  Activity,
  ScanLine,
  Stethoscope,
];

const FacilitiesSection = ({ facilities = [] }) => {
  if (facilities.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Facilities
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            World-Class Facilities
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Our department is equipped with advanced technology, modern
            infrastructure, and patient-focused facilities to ensure safe,
            accurate, and high-quality healthcare.
          </p>
        </div>

        {/* Facilities Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {facilities.map((facility, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:bg-[#0096D6] hover:border-[#0096D6] transition-all duration-300"
              >

                <div className="mx-auto h-20 w-20 rounded-full bg-[#EAF7FD] flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">

                  <Icon
                    size={34}
                    className="text-[#0096D6] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#103B50] group-hover:text-white transition-colors">
                  {facility.title}
                </h3>

                {facility.description && (
                  <p className="mt-4 text-gray-600 leading-7 group-hover:text-white/90 transition-colors">
                    {facility.description}
                  </p>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;