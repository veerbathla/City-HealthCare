import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck,
  PhoneCall,
  Clock3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const CashlessHighlight = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#0077B6] via-[#0096D6] to-[#00AEEF]">

      {/* Background Circles */}
      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-white font-semibold">
              <ShieldCheck size={18} />
              Cashless Treatment Facility
            </span>

            <h2 className="mt-7 text-4xl md:text-5xl font-bold leading-tight text-white">
              Receive Quality Healthcare
              <br />
              Without Financial Stress
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/90">
              City HealthCare proudly offers cashless
              hospitalization for patients covered under
              leading General and Health Insurance providers.
              Our dedicated Insurance Desk ensures a smooth,
              transparent and hassle-free approval process.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <a
                href="tel:+919728375033"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#0096D6] transition hover:scale-105"
              >
                <PhoneCall size={18} />
                Call Hospital
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0096D6]"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-5">

            <div className="rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 p-7">

              <BadgeCheck
                size={38}
                className="text-white"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Approved Insurance Partners
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Empanelled with leading insurance
                providers across India.
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 p-7">

              <FileCheck
                size={38}
                className="text-white"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Paperless Process
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Minimal paperwork with complete
                assistance from our Insurance Desk.
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 p-7">

              <Clock3
                size={38}
                className="text-white"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Faster Approvals
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Quick coordination with insurers
                for timely treatment approvals.
              </p>

            </div>

            <div className="rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 p-7">

              <ShieldCheck
                size={38}
                className="text-white"
              />

              <h3 className="mt-5 text-xl font-bold text-white">
                Dedicated Insurance Desk
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Our experienced team guides you
                through every step of the process.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CashlessHighlight;