import React from "react";
import { whyChoose } from "../../data/empanelment/whyChoose";
import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Why Patients Trust
            <span className="text-[#0096D6]"> City HealthCare</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Delivering advanced healthcare with transparency,
            compassion and clinical excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0096D6]/10 flex items-center justify-center group-hover:bg-[#0096D6] transition">
                  <Icon
                    size={32}
                    className="text-[#0096D6] group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-[#0096D6] font-medium">
                  <CheckCircle2 size={18} />
                  Trusted Healthcare
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;