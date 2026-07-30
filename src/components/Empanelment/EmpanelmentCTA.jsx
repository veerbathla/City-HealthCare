import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, CalendarDays } from "lucide-react";

const EmpanelmentCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0077B6] via-[#0096D6] to-[#00AEEF]">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Need Help With
          <br />
          Cashless Treatment?
        </h2>

        <p className="mt-8 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
          Our dedicated Insurance Help Desk is always ready to
          assist you with policy verification, pre-authorisation,
          claim support and complete cashless treatment guidance.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="tel:+919728375033"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[#0096D6] hover:scale-105 transition"
          >
            <PhoneCall size={20} />
            Call Now
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#0096D6] transition"
          >
            <CalendarDays size={20} />
            Book Appointment
          </Link>

        </div>

      </div>

    </section>
  );
};

export default EmpanelmentCTA;