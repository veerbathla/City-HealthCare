import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Activity,
  Eye,
  Stethoscope,
  Pill,
} from "lucide-react";

const categories = [
  {
    title: "Cardiology",
    icon: HeartPulse,
  },
  {
    title: "Neurology",
    icon: Brain,
  },
  {
    title: "Orthopedics",
    icon: Bone,
  },
  {
    title: "Pediatrics",
    icon: Baby,
  },
  {
    title: "General Medicine",
    icon: Stethoscope,
  },
  {
    title: "Pulmonology",
    icon: Activity,
  },
  {
    title: "Ophthalmology",
    icon: Eye,
  },
  {
    title: "Pharmacy",
    icon: Pill,
  },
];

const BlogCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Browse by Department
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Explore expert-written healthcare articles organized by medical
            specialties.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-sky-600 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 transition group-hover:bg-sky-700">
                  <Icon
                    size={28}
                    className="text-sky-700 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Read expert insights and health guides.
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;