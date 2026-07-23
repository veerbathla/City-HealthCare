// import React from "react";

// const LocationReviews = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-[#009CD0]">
//             Find Us & Patient Reviews
//           </h2>

//           <p className="mt-3 text-gray-600">
//             Trusted healthcare with excellent patient satisfaction.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Google Map */}
//           <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
//             <iframe
//               title="City Healthcare Hospital"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.0616514396233!2d75.02626267499109!3d29.54369884212313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114d7b8a04995b%3A0x99b4abdf5c661ca9!2sCity%20health%20care%20%26%20Neuro%20Research%20Centre%20-%20Neurologist%2FSpine%20Surgeon%2FGynaecologist%2FBest%20Hospital%20in%20Sirsa!5e0!3m2!1sen!2sin!4v1782901026126!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="strict-origin-when-cross-origin"
//             />
//           </div>

//           {/* Google Reviews */}
//           <div className="bg-white rounded-3xl shadow-xl p-6 h-[500px] overflow-y-auto">
//             <h3 className="text-2xl font-semibold text-[#009CD0] mb-6">
//               Google Reviews
//             </h3>

//             {/* Replace this with your Elfsight Widget ID */}

//             <script src="https://elfsightcdn.com/platform.js" async></script>
//             <div
//               class="elfsight-app-5b68d072-134e-4f0e-8391-7a0ae0ebd383"
//               data-elfsight-app-lazy
//             ></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationReviews;

import React from "react";
import { useTranslation } from "react-i18next";

const LocationReviews = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
  {/* Heading */}
  <div className="flex flex-col items-center mb-12">
    <img
      src="CityhealthCare.jpg"
      alt="Logo"
      className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto"
    />

    <p className="mt-5 text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
      Trusted Healthcare with{" "}<br/>
      <span className="text-[#0096D6] font-semibold">
        Excellent Patient Satisfaction
      </span>
    </p>
  </div>


        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              title="City Healthcare Hospital"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.0616514396233!2d75.02626267499109!3d29.54369884212313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114d7b8a04995b%3A0x99b4abdf5c661ca9!2sCity%20health%20care%20%26%20Neuro%20Research%20Centre%20-%20Neurologist%2FSpine%20Surgeon%2FGynaecologist%2FBest%20Hospital%20in%20Sirsa!5e0!3m2!1sen!2sin!4v1782901026126!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Google Reviews */}
          <div className="bg-white rounded-3xl shadow-xl p-6 h-[500px] overflow-y-auto">
            <h3 className="text-2xl font-semibold text-[#009CD0]">
              Google Reviews
            </h3>

            <script src="https://elfsightcdn.com/platform.js" async></script>

            <div
              className="elfsight-app-5b68d072-134e-4f0e-8391-7a0ae0ebd383"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationReviews;
