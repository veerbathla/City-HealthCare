



import {
  Award,
  BadgeCheck,
  BriefcaseMedical,
  Clock3,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

const DoctorDetails = () => {
  const { slug } = useParams();

  const doctor = doctors.find(
    (doc) => doc.doctorSlug === slug
  );

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">
          Doctor Not Found
        </h1>
      </div>
    );
  }


  return (
    <div className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-5 py-14">

        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* Doctor Image */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl p-5 border">

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full rounded-2xl object-cover"
              />

            </div>

          </div>

          {/* Doctor Info */}

          <div className="lg:col-span-3">

            <span className="inline-flex items-center gap-2 bg-cyan-100 text-[#0096D6] px-4 py-2 rounded-full text-sm font-semibold">

              <HeartPulse size={18} />

              {doctor.department}

            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5 leading-tight">

              {doctor.name}

            </h1>

            <h2 className="text-2xl text-[#0096D6] font-semibold mt-3">

              {doctor.designation}

            </h2>

            <p className="text-gray-600 mt-2">

              <span className="font-semibold">
                Speciality :
              </span>{" "}
              {doctor.speciality}

            </p>

            {/* Qualifications */}

            {doctor.qualifications?.length > 0 && (

              <div className="flex flex-wrap gap-3 mt-6">

                {doctor.qualifications.map((item, index) => (

                  <span
                    key={index}
                    className="bg-white border border-cyan-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            )}

            {/* Experience */}

            <div className="mt-7 flex flex-wrap gap-5">

              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-md">

                <BriefcaseMedical
                  className="text-[#0096D6]"
                  size={26}
                />

                <div>

                  <p className="text-sm text-gray-500">
                    Experience
                  </p>

                  <h3 className="font-semibold">
                    {doctor.experience}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-md">

                <Stethoscope
                  className="text-[#0096D6]"
                  size={26}
                />

                <div>

                  <p className="text-sm text-gray-500">
                    Department
                  </p>

                  <h3 className="font-semibold">
                    {doctor.department}
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="max-w-7xl mx-auto px-5 pb-12">

        <div className="bg-white rounded-3xl shadow-lg p-8 border">

          <div className="flex items-center gap-3 mb-6">

            <UserRound
              className="text-[#0096D6]"
              size={30}
            />

            <h2 className="text-3xl font-bold text-slate-900">

              About Doctor

            </h2>

          </div>

          <p className="text-gray-600 leading-8 text-lg">

            {doctor.about}

          </p>

        </div>

      </section>

      {/* ======== PART 2 STARTS FROM HERE ======== */}
            {/* ================= EXPERTISE ================= */}

      {doctor.expertise?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-6">

          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {doctor.expertise.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#0096D6]/10 flex items-center justify-center mb-5">
                  <Stethoscope
                    className="text-[#0096D6]"
                    size={28}
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-3 text-gray-600 leading-7">
                    {item.description}
                  </p>
                )}

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ================= CONDITIONS TREATED ================= */}

      {doctor.conditionsTreated?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-10">

          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Conditions Treated
            </h2>
          </div>

          <div className="bg-white rounded-3xl border shadow-lg p-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {doctor.conditionsTreated.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 border rounded-xl px-4 py-4 hover:bg-[#0096D6] hover:text-white transition-all duration-300 group"
                >

                  <BadgeCheck
                    size={20}
                    className="text-[#0096D6] group-hover:text-white flex-shrink-0"
                  />

                  <span className="font-medium">
                    {condition}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* ================= PROCEDURES ================= */}

      {doctor.procedures?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-6">

          <div className="flex items-center gap-3 mb-8">
            <BriefcaseMedical
              className="text-[#0096D6]"
              size={30}
            />

            <h2 className="text-3xl font-bold text-slate-900">
              Procedures Performed
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

            {doctor.procedures.map((procedure, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#0096D6] transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#0096D6]/10 flex items-center justify-center flex-shrink-0">

                    <Stethoscope
                      className="text-[#0096D6]"
                      size={24}
                    />

                  </div>

                  <h3 className="font-semibold text-slate-800 leading-7">
                    {procedure}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ======== PART 3 STARTS FROM HERE ======== */}
            {/* ================= EDUCATION ================= */}

      {doctor.education?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-10">

          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Education
            </h2>
          </div>

          <div className="relative border-l-4 border-[#0096D6] ml-3">

            {doctor.education.map((edu, index) => (
              <div key={index} className="relative pl-8 pb-10">

                <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-[#0096D6] border-4 border-white shadow-lg" />

                <div className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition-all duration-300">

                  <h3 className="text-xl font-semibold text-slate-900">
                    {edu.degree}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {edu.institute}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ================= FELLOWSHIP & TRAINING ================= */}

      {doctor.training?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-6">

          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Fellowship & Training
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {doctor.training.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 flex items-start gap-4"
              >

                <div className="w-12 h-12 rounded-xl bg-[#0096D6]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#0096D6]" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-6">
                    Advanced specialized training focused on delivering
                    world-class neurological and spine care using modern,
                    minimally invasive techniques.
                  </p>
                </div>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ================= RESEARCH & PUBLICATIONS ================= */}

      {doctor.publications?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-10">

          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Research & Publications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {doctor.publications.map((publication, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-cyan-50 border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#0096D6] text-white flex items-center justify-center flex-shrink-0">

                    <GraduationCap size={22} />

                  </div>

                  <div>

                    <h3 className="font-semibold text-lg text-slate-900">
                      {publication}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      Contributing to national and international medical
                      literature by sharing clinical expertise, research,
                      and advancements in neurosurgery.
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* ======== PART 4 STARTS FROM HERE ======== */}
            {/* ================= HIGHLIGHTS ================= */}

      {doctor.highlights?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-10">

          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#0096D6]" size={30} />
            <h2 className="text-3xl font-bold text-slate-900">
              Professional Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {doctor.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0096D6] to-[#00B8E6] text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <Award className="mb-4" size={30} />

                <p className="leading-7 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {/* ================= MEMBERSHIPS ================= */}

      {doctor.memberships?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 py-6">

          <div className="flex items-center gap-3 mb-8">
            <BadgeCheck className="text-[#0096D6]" size={30} />

            <h2 className="text-3xl font-bold text-slate-900">
              Professional Memberships
            </h2>

          </div>

          <div className="bg-white rounded-3xl border shadow-lg p-8">

            <div className="grid md:grid-cols-2 gap-5">

              {doctor.memberships.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-50 rounded-xl border p-5 hover:bg-[#0096D6] hover:text-white transition duration-300 group"
                >

                  <BadgeCheck
                    className="text-[#0096D6] group-hover:text-white"
                    size={24}
                  />

                  <span className="font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* ================= APPOINTMENT ================= */}

      {doctor.appointment && (
        <section className="max-w-7xl mx-auto px-5 py-12">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#0096D6] to-[#0077B6] text-white shadow-2xl">

            <div className="grid lg:grid-cols-2">

              {/* Left */}

              <div className="p-10">

                <span className="uppercase tracking-widest text-cyan-100 text-sm">
                  Book Consultation
                </span>

                <h2 className="text-4xl font-bold mt-3">
                  Schedule an Appointment
                </h2>

                <p className="mt-4 text-cyan-100 leading-7">
                  Book your consultation with
                  <span className="font-semibold text-white">
                    {" "}
                    {doctor.name}
                  </span>{" "}
                  at {doctor.appointment.hospital}.
                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex gap-4 items-start">
                    <BriefcaseMedical size={22} />
                    <div>
                      <h4 className="font-semibold">
                        Hospital
                      </h4>
                      <p className="text-cyan-100">
                        {doctor.appointment.hospital}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <UserRound size={22} />
                    <div>
                      <h4 className="font-semibold">
                        Address
                      </h4>
                      <p className="text-cyan-100">
                        {doctor.appointment.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock3 size={22} />
                    <div>
                      <h4 className="font-semibold">
                        Timings
                      </h4>
                      <p className="text-cyan-100">
                        {doctor.appointment.timings}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="bg-white text-slate-800 p-10 flex flex-col justify-center">

                <h3 className="text-2xl font-bold mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-sm text-gray-500">
                      Emergency
                    </p>

                    <h4 className="font-semibold text-lg">
                      {doctor.appointment.emergency}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <a
                      href={`tel:${doctor.appointment.phone}`}
                      className="font-semibold text-[#0096D6]"
                    >
                      {doctor.appointment.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <a
                      href={`mailto:${doctor.appointment.email}`}
                      className="font-semibold text-[#0096D6] break-all"
                    >
                      {doctor.appointment.email}
                    </a>
                  </div>

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={`tel:${doctor.appointment.phone}`}
                    className="bg-[#0096D6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#007BB5] transition"
                  >
                    Call Now
                  </a>

                  <a
                    href={`mailto:${doctor.appointment.email}`}
                    className="border-2 border-[#0096D6] text-[#0096D6] px-6 py-3 rounded-xl font-semibold hover:bg-[#0096D6] hover:text-white transition"
                  >
                    Email Us
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}

    </div>
  );
};

export default DoctorDetails;