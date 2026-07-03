import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Ambulance,
  CalendarCheck,
  Building2,
} from "lucide-react";

const ContactSection = ({ contact }) => {
  if (!contact) return null;

  return (
    <section className="py-20 bg-[#0096D6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center text-white mb-14">
          <span className="uppercase tracking-[3px] text-blue-100 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Book Your Appointment Today
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-8">
            Our specialists are committed to providing compassionate,
            personalized healthcare. Contact us to schedule your consultation
            or receive immediate medical assistance.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Hospital */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="h-14 w-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center">
              <Building2 className="text-[#0096D6]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#103B50]">
              Hospital
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              {contact.hospital}
            </p>
          </div>

          {/* Phone */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="h-14 w-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center">
              <Phone className="text-[#0096D6]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#103B50]">
              Phone
            </h3>

            <a
              href={`tel:${contact.phone}`}
              className="mt-3 block text-gray-600 hover:text-[#0096D6]"
            >
              {contact.phone}
            </a>
          </div>

          {/* Email */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="h-14 w-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center">
              <Mail className="text-[#0096D6]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#103B50]">
              Email
            </h3>

            <a
              href={`mailto:${contact.email}`}
              className="mt-3 block break-all text-gray-600 hover:text-[#0096D6]"
            >
              {contact.email}
            </a>
          </div>

          {/* Address */}

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="h-14 w-14 rounded-2xl bg-[#EAF7FD] flex items-center justify-center">
              <MapPin className="text-[#0096D6]" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#103B50]">
              Address
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              {contact.address}
            </p>
          </div>

        </div>

        {/* OPD Timing */}

        {(contact.opdTimings || contact.emergency) && (
          <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg flex flex-col lg:flex-row justify-between gap-8">

            <div>

              <div className="flex items-center gap-3">
                <Clock className="text-[#0096D6]" />

                <h3 className="text-xl font-semibold text-[#103B50]">
                  OPD Timings
                </h3>

              </div>

              <p className="mt-3 text-gray-600 leading-7">
                {contact.opdTimings}
              </p>

              {contact.emergency && (
                <div className="mt-5 flex items-center gap-2 text-red-600 font-semibold">
                  <Ambulance size={18} />
                  {contact.emergency}
                </div>
              )}

            </div>

            <div className="flex flex-wrap items-center gap-4">

              <a
                href={`tel:${contact.phone}`}
                className="px-8 py-4 rounded-xl bg-[#0096D6] text-white font-semibold hover:bg-[#007DB4] transition"
              >
                Call Now
              </a>

              <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#0096D6] text-[#0096D6] font-semibold hover:bg-[#0096D6] hover:text-white transition">
                <CalendarCheck size={20} />
                Book Appointment
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ContactSection;