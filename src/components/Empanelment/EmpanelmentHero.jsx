import React from "react";

const EmpanelmentHero = () => {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#003B57] via-[#005D87] to-[#0096D6]">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-10 sm:py-14">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Cashless Treatment
            <br />
            <span className="text-[#9BE8FF]">
              Made Simple & Hassle Free
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/90">
            City HealthCare Neuro Research & Infertility Centre,
            Sirsa is proudly empanelled with leading General and
            Health Insurance companies, offering seamless
            cashless hospitalization for eligible patients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmpanelmentHero;