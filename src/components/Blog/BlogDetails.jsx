import {
  CalendarDays,
  Clock3,
  Facebook,
  Linkedin,
  Twitter,
  ArrowLeft,
} from "lucide-react";

const BlogDetails = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <button className="mb-8 inline-flex items-center gap-2 font-medium text-sky-700 hover:text-sky-800">
          <ArrowLeft size={18} />
          Back to Blogs
        </button>

        <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          Cardiology
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          10 Early Warning Signs of Heart Disease You Should Never Ignore
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            July 3, 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            8 min read
          </div>

          <div>
            By <span className="font-semibold text-gray-700">Dr. Rajesh Sharma</span>
          </div>
        </div>

        <img
          src="/images/blog/featured-blog.jpg"
          alt="Heart Disease"
          className="mt-10 h-[450px] w-full rounded-3xl object-cover"
        />

        <article className="prose prose-lg mt-12 max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-8">
          <p>
            Heart disease is one of the leading causes of death worldwide, but
            early detection can significantly improve outcomes. Recognizing the
            warning signs and seeking timely medical attention can help prevent
            life-threatening complications.
          </p>

          <h2>Common Symptoms</h2>

          <p>
            Symptoms may include chest pain, shortness of breath, unusual
            fatigue, dizziness, pain radiating to the arm or jaw, and irregular
            heartbeat. These symptoms should never be ignored.
          </p>

          <h2>Risk Factors</h2>

          <ul>
            <li>High blood pressure</li>
            <li>Diabetes</li>
            <li>Smoking</li>
            <li>High cholesterol</li>
            <li>Obesity</li>
            <li>Sedentary lifestyle</li>
          </ul>

          <h2>When to Visit a Doctor</h2>

          <p>
            If you experience persistent chest discomfort, breathlessness, or
            unexplained fatigue, consult a cardiologist immediately. Early
            diagnosis and treatment can greatly reduce the risk of serious heart
            conditions.
          </p>
        </article>

        <div className="mt-12 flex items-center justify-between border-t pt-8">
          <div>
            <h3 className="font-semibold text-gray-900">Share this article</h3>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full border p-3 transition hover:bg-sky-700 hover:text-white">
              <Facebook size={18} />
            </button>

            <button className="rounded-full border p-3 transition hover:bg-sky-700 hover:text-white">
              <Twitter size={18} />
            </button>

            <button className="rounded-full border p-3 transition hover:bg-sky-700 hover:text-white">
              <Linkedin size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;