import React from "react";
import { processSteps } from "../../data/empanelment/processSteps";

const CashlessProcess = () => {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
            Cashless Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            How Cashless Treatment Works
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Getting cashless treatment at City HealthCare is
            simple, quick and completely hassle-free.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {processSteps.map((step) => (

            <div
              key={step.step}
              className="relative rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
            >

              <div className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-[#0096D6] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {step.step}
              </div>

              <h3 className="mt-10 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default CashlessProcess;