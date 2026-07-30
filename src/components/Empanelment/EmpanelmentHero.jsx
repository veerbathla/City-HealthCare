import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import hero3 from "../../assets/hero/hero3.jpg";

const EmpanelmentHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero3}
          alt="City HealthCare"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B57]/90 via-[#005D87]/75 to-[#0096D6]/50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 text-white">
            <ShieldCheck size={18} />
            <span className="text-sm font-semibold tracking-wide uppercase">
              GIC Empanelled Hospital
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Cashless Treatment
            <br />
            <span className="text-[#9BE8FF]">
              Made Simple & Hassle Free
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl leading-8 text-white/90 max-w-2xl">
            City HealthCare Neuro Research & Infertility Centre,
            Sirsa is proudly empanelled with leading General and
            Health Insurance companies, offering seamless
            cashless hospitalization for eligible patients.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#insurance-partners"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0096D6] px-8 py-4 font-semibold text-white transition hover:bg-[#007EB2]"
            >
              View Insurance Partners
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0096D6]"
            >
              Contact Us
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
              <BadgeCheck
                className="text-[#9BE8FF]"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                30+
              </h3>

              <p className="mt-2 text-white/80">
                Insurance Partners
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
              <ShieldCheck
                className="text-[#9BE8FF]"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                Cashless
              </h3>

              <p className="mt-2 text-white/80">
                Hospitalization Facility
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
              <HeartHandshake
                className="text-[#9BE8FF]"
                size={34}
              />

              <h3 className="mt-4 text-3xl font-bold text-white">
                Trusted
              </h3>

              <p className="mt-2 text-white/80">
                Patient First Care
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white"
        >
          <path d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
        </svg>
      </div>
    </section>
  );
};

export default EmpanelmentHero;