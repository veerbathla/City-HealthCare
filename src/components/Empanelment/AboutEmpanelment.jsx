import React from "react";
import {
  ShieldCheck,
  Hospital,
  HeartHandshake,
  Award,
} from "lucide-react";

const AboutEmpanelment = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block rounded-full bg-[#0096D6]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0096D6]">
              About Our Empanelment
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Destination for
              <span className="text-[#0096D6]">
                {" "}Advanced Healthcare
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At <strong>City HealthCare Neuro Research &
              Infertility Centre, Sirsa</strong>, we are committed
              to delivering exceptional healthcare through
              advanced technology, experienced specialists,
              and compassionate patient care.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a <strong>GIC Empanelled Hospital</strong>,
              we proudly provide cashless treatment facilities
              for patients covered under leading General and
              Health Insurance companies across India.
            </p>

            <div className="mt-10 rounded-2xl border-l-4 border-[#0096D6] bg-sky-50 p-6">

              <h3 className="text-xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 text-gray-700 leading-8 italic">
                "Best Treatment. Trusted Care.
                Health Comes First."
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Your trust is our greatest achievement,
                and your well-being remains our highest priority.
              </p>

            </div>

          </div>

          {/* Right Cards */}

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8 hover:shadow-xl transition">

              <Hospital
                size={42}
                className="text-[#0096D6]"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Super Multispeciality Hospital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Comprehensive healthcare services
                under one roof with advanced
                infrastructure.
              </p>

            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-8 hover:shadow-xl transition">

              <ShieldCheck
                size={42}
                className="text-[#0096D6]"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                GIC Empanelled
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Authorized for cashless treatment
                with leading General & Health
                Insurance companies.
              </p>

            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-8 hover:shadow-xl transition">

              <HeartHandshake
                size={42}
                className="text-[#0096D6]"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Compassionate Care
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Every patient receives ethical,
                transparent and personalized
                healthcare services.
              </p>

            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8 hover:shadow-xl transition">

              <Award
                size={42}
                className="text-[#0096D6]"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Clinical Excellence
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Expert specialists supported by
                modern diagnostics and advanced
                medical technology.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutEmpanelment;