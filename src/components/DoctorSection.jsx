// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// import DoctorCard from "./DoctorCard";
// import doctors from "../data/doctors";

// const DoctorSection = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-5">

//         {/* Heading */}
//         <div className="flex items-center justify-between mb-12">

//           <div>
//             <p className="text-[#009CD0] uppercase tracking-widest font-semibold">
//               Meet Our Specialists
//             </p>

//             <h2 className="text-4xl font-bold mt-2 text-gray-800">
//               Our Expert Doctors
//             </h2>

//             <p className="text-gray-500 mt-3">
//               Highly experienced specialists dedicated to your health.
//             </p>
//           </div>

//           <NavLink
//             to="/doctors"
//             className="hidden md:block bg-[#009CD0] hover:bg-[#0084b0] text-white px-6 py-3 rounded-full transition"
//           >
//             View All →
//           </NavLink>

//         </div>

//         {/* Swiper */}

//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={25}
//           slidesPerView={3}
//           loop={true}
//           speed={700}
//           grabCursor={true}
//           allowTouchMove={true}
//           simulateTouch={true}
//           touchStartPreventDefault={false}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {doctors.map((doctor) => (
//             <SwiperSlide key={doctor.id}>
//               <DoctorCard doctor={doctor} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Mobile Button */}

//         <div className="mt-10 flex justify-center md:hidden">
//           <NavLink
//             to="/doctors"
//             className="bg-[#009CD0] text-white px-8 py-3 rounded-full"
//           >
//             View All Doctors
//           </NavLink>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DoctorSection;



import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";

import DoctorCard from "./DoctorCard";
import doctors from "../data/doctors";

const DoctorSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="flex items-center justify-between mb-12">

          <div>
            <p className="text-[#009CD0] uppercase tracking-widest font-semibold">
              {t("meetOurSpecialists")}
            </p>

            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              {t("ourExpertDoctors")}
            </h2>

            <p className="text-gray-500 mt-3">
              {t("doctorSectionDesc")}
            </p>
          </div>

          <NavLink
            to="/doctors"
            className="hidden md:block bg-[#009CD0] hover:bg-[#0084b0] text-white px-6 py-3 rounded-full transition"
          >
            {t("viewAll")} →
          </NavLink>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          speed={700}
          grabCursor={true}
          allowTouchMove={true}
          simulateTouch={true}
          touchStartPreventDefault={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Button */}

        <div className="mt-10 flex justify-center md:hidden">
          <NavLink
            to="/doctors"
            className="bg-[#009CD0] text-white px-8 py-3 rounded-full"
          >
            {t("viewAllDoctors")}
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default DoctorSection;