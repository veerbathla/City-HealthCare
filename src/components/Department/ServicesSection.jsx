import React from "react";
import {
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Activity,
 Microscope,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

const icons = [
  Stethoscope,
  HeartPulse,
  Activity,
  Microscope,
  ScanLine,
  ShieldCheck,
  CheckCircle2,
];

const ServicesSection = ({ services = [] }) => {
  if (services.length === 0) return null;

  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            Comprehensive Medical Services
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] rounded-full mx-auto mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            We provide a comprehensive range of diagnostic, preventive,
            therapeutic, and follow-up services to ensure complete patient care.
          </p>

        </div>

        {/* Services */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {

            const Icon = icons[index % icons.length];

            return (

              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-xl hover:border-[#0096D6] hover:-translate-y-2 transition-all duration-300"
              >

                <div className="h-16 w-16 rounded-2xl bg-[#EAF7FD] flex items-center justify-center group-hover:bg-[#0096D6] transition">

                  <Icon
                    size={30}
                    className="text-[#0096D6] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#103B50]">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="mt-4 text-gray-600 leading-7">
                    {service.description}
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

export default ServicesSection;