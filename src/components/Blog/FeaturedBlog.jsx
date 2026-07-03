import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const FeaturedBlog = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Featured Article
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Editor's Pick
            </h2>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="/images/blog/featured-blog.jpg"
              alt="Featured Blog"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="mb-4 w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Cardiology
            </span>

            <h3 className="text-3xl font-bold leading-tight text-gray-900">
              10 Early Warning Signs of Heart Disease You Should Never Ignore
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Heart disease often develops silently. Learn about the most
              common warning signs, when to seek medical attention, and how
              early diagnosis can help prevent serious complications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>July 3, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                <span>8 min read</span>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;