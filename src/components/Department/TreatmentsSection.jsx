import React from "react";
import { ChevronRight } from "lucide-react";

const TreatmentsSection = ({ treatments }) => {
  if (!Array.isArray(treatments) || treatments.length === 0) return null;

  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Treatments
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            Treatments & Conditions
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] mx-auto rounded-full mt-5"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Our specialists provide comprehensive diagnosis and treatment for a
            wide range of neurological and medical conditions using
            evidence-based medicine and advanced clinical care.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {treatments.map((category, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* Header */}

              <div className="bg-[#0096D6] px-8 py-5">
                <h3 className="text-2xl font-semibold text-white">
                  {category.category || "Treatment Category"}
                </h3>
              </div>

              {/* Body */}

              <div className="p-8">

                {Array.isArray(category.conditions) &&
                  category.conditions.length > 0 && (
                    <div className="grid gap-4">

                      {category.conditions.map((condition, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3"
                        >
                          <ChevronRight
                            size={18}
                            className="text-[#0096D6] flex-shrink-0"
                          />

                          <span className="text-gray-700 leading-7">
                            {condition}
                          </span>
                        </div>
                      ))}

                    </div>
                  )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;