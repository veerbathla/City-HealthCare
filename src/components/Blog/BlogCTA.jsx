import { ArrowRight, CalendarPlus, PhoneCall } from "lucide-react";

const BlogCTA = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                Need Medical Assistance?
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                Don't Ignore Your Health.
                <br />
                Consult Our Specialists Today.
              </h2>

              <p className="mt-6 text-lg leading-8 text-sky-100">
                Whether you need a routine consultation or specialized
                treatment, our experienced doctors are here to provide
                compassionate, world-class healthcare.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition hover:bg-sky-100">
                  <CalendarPlus size={20} />
                  Book Appointment
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-sky-700">
                  <PhoneCall size={20} />
                  Call Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex justify-center self-end">
              <img
                src="/images/blog/cta-doctor.png"
                alt="Doctor"
                className="max-h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;