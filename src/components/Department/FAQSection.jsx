import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = ({ faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-[#F8FCFE]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-1 bg-[#0096D6] rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-gray-600 leading-8 max-w-3xl mx-auto">
            Find answers to the most commonly asked questions about this
            department and the services we provide.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold text-[#103B50]">
                    {faq.question}
                  </h3>

                  <div className="h-10 w-10 rounded-full bg-[#EAF7FD] flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <Minus size={20} className="text-[#0096D6]" />
                    ) : (
                      <Plus size={20} className="text-[#0096D6]" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="pt-5 text-gray-600 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;