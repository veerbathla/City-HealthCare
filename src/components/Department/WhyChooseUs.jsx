import React from "react";
import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Brain,
  Microscope,
  BadgeCheck,
  Hospital,
  Activity,
} from "lucide-react";

const icons = [
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Brain,
  Microscope,
  BadgeCheck,
  Hospital,
  Activity,
];

const WhyChooseUs = ({ data, whyChooseUs }) => {
  const section = data || whyChooseUs;

  if (!section || !Array.isArray(section.points) || section.points.length === 0)
    return null;

  return (
    <section className="pt-0  pb-2 bg-[#F8FCFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-8">

          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            {section.title || "Why Choose Our Department"}
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] mx-auto rounded-full mt-5"></div>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {section.points.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#0096D6] hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FD] transition-all duration-300 group-hover:bg-white/20">

                  <Icon
                    size={32}
                    className="text-[#0096D6] group-hover:text-white"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#103B50] transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;