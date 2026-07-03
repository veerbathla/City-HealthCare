import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are the articles written by qualified doctors?",
    answer:
      "Yes. Every article published on the City Healthcare Blog is written or medically reviewed by experienced healthcare professionals to ensure accuracy and reliability.",
  },
  {
    question: "How often is the blog updated?",
    answer:
      "We regularly publish new articles covering diseases, treatments, wellness tips, preventive care, and hospital updates.",
  },
  {
    question: "Can I book an appointment from a blog article?",
    answer:
      "Yes. Every article provides an option to schedule an appointment with the relevant specialist for further consultation.",
  },
  {
    question: "Is the information on this blog a substitute for medical advice?",
    answer:
      "No. Our articles are intended for educational purposes only and should not replace professional medical consultation, diagnosis, or treatment.",
  },
  {
    question: "Can I share these articles with others?",
    answer:
      "Absolutely. You can share our health articles with friends and family through social media or direct links.",
  },
];

const BlogFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            FAQs
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to common questions about our healthcare blog and
            medical content.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFAQ;