import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutSection = ({ about }) => {
  if (!about) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-[#0096D6] font-semibold uppercase tracking-widest">
            About Department
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#12344D]">
            {about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            {about.description?.map((para, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-gray-600 mb-6"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={
                  about.image ||
                  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80"
                }
                alt={about.title || "Department"}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {about.highlights?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {about.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#F4FBFE] p-4 rounded-xl"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-[#0096D6] flex-shrink-0"
                    />

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;