// import React from "react";
// import { Phone, CalendarCheck } from "lucide-react";

// const HeroSection = ({ hero, name, contact }) => {
//   if (!hero) {
//     return (
//       <section className="h-[70vh] flex items-center justify-center bg-gray-100">
//         <h2 className="text-2xl font-semibold text-red-500">
//           Hero Data Not Found
//         </h2>
//       </section>
//     );
//   }

//   return (
//     <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
//       {/* Background */}
//       <img
//         src={hero.image || "/images/default-hero.jpg"}
//         alt={hero.title || name}
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#003A5D]/90 via-[#0096D6]/70 to-[#0096D6]/30" />

//       {/* Content */}
//       <div className="relative z-10 flex h-full items-center">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <span className="inline-block rounded-full bg-white/20 backdrop-blur px-5 py-2 text-sm font-medium text-white">
//             City HealthCare
//           </span>

//           <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-tight text-white">
//             {hero.title || name}
//           </h1>

//           {hero.subtitle && (
//             <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
//               {hero.subtitle}
//             </p>
//           )}

//           <div className="mt-10 flex flex-wrap gap-4">
//             <button className="flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-[#0096D6] transition hover:scale-105">
//               <CalendarCheck size={20} />
//               Book Appointment
//             </button>

//             {contact?.phone && (
//               <a
//                 href={`tel:${contact.phone}`}
//                 className="flex items-center gap-2 rounded-lg border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0096D6]"
//               >
//                 <Phone size={20} />
//                 Call Now
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";

const HeroSection = ({ hero, name }) => {
  if (!hero) {
    return (
      <section className="h-[70vh] flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-red-500">
          Hero Data Not Found
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-2 lg:py-4">
          <img
    src={hero.image || "/images/default-hero.jpg"}
    alt={hero.title || name}
    className="w-full h-auto block"
  />
      </div>
    </section>
  );
};

export default HeroSection;