import { Search, BookOpen, Stethoscope } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <BookOpen size={16} />
            City Healthcare Health Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Trusted Health
            <span className="block text-[#0096D6]">
              Information From
            </span>
            Medical Experts
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover doctor-reviewed articles on diseases, treatments,
            preventive healthcare, nutrition, wellness, and the latest
            medical innovations—all written to help you make informed
            health decisions.
          </p>

          

          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <h2 className="text-3xl font-bold text-[#0096D6]">
                100+
              </h2>
              <p className="text-gray-600">
                Health Articles
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-700">
                20+
              </h2>
              <p className="text-gray-600">
                Medical Departments
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-sky-700">
                15+
              </h2>
              <p className="text-gray-600">
                Expert Doctors
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src="/images/blog/blog-hero.png"
            alt="City Healthcare Blog"
            className="w-full max-w-xl"
          />

          {/* Floating Card */}

          <div className="absolute -left-10 top-10 rounded-2xl bg-white p-5 shadow-xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-sky-100 p-3">

                <Stethoscope
                  className="text-sky-700"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-semibold">
                  Doctor Reviewed
                </h4>

                <p className="text-sm text-gray-500">
                  Verified Medical Information
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogHero;