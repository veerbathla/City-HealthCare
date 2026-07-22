// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHospital, FaArrowRight } from "react-icons/fa";

// const DoctorCard = ({ doctor }) => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-full">

//       <div className="flex flex-col items-center px-8 pt-8 pb-8">

//         {/* Doctor Image */}
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           className="w-44 h-52 object-cover rounded-xl"
//         />

//         {/* Doctor Name */}
//         <h2 className="mt-6 text-2xl font-bold text-center text-gray-800">
//           {doctor.name}
//         </h2>

//         {/* Designation */}
//         <p className="mt-2 text-center text-[#009CD0] font-medium leading-relaxed">
//           {doctor.designation}
//         </p>

//         {/* Hospital */}
//         <div className="flex items-center gap-2 mt-5 text-gray-600">
//           <FaHospital className="text-[#009CD0]" />
//           <span>City HealthCare Hospital</span>
//         </div>

//         {/* Buttons */}
//         <div className="w-full mt-8 space-y-3">

//           <Link to={`/doctors/${doctor.slug}`}>
//             <button className="w-full bg-[#009CD0] hover:bg-[#0083af] text-white font-semibold py-3 rounded-lg transition">
//               Book Appointment
//             </button>
//           </Link>

//           <Link to={`/doctors/${doctor.slug}`}>
//             <button className=" mt-4 w-full border border-[#009CD0] text-[#009CD0] hover:bg-[#009CD0] hover:text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
//               View Profile
//               <FaArrowRight size={13} />
//             </button>
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default DoctorCard;


import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DoctorCard = ({ doctor }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-xl transition duration-300">
      <div className="flex flex-col items-center px-8 py-8 h-full">
        {/* Doctor Image */}
        <div className="w-44 h-56 flex items-end justify-center">
  <img
    src={doctor.image}
    alt={doctor.name}
    className="max-w-full max-h-full object-contain"
  />
</div>

        {/* Doctor Name */}
        <h2 className="mt-6 text-2xl font-bold text-center text-gray-800">
          {doctor.name}
        </h2>

        {/* Designation */}
        <p className="mt-2 text-center text-[#009CD0] font-medium leading-relaxed">
          {doctor.designation}
        </p>

        {/* Hospital */}
        <div className="flex items-center gap-2 mt-5 text-gray-600">
          <FaHospital className="text-[#009CD0]" />
          <span>{t("hospitalName")}</span>
        </div>

        {/* Buttons */}
<div className="w-full mt-8 space-y-4">
  <Link
    to={`/doctors/${doctor.doctorSlug}`}
    className="block"
  >
    <button className="w-full bg-[#009CD0] hover:bg-[#0083af] text-white font-semibold py-3 rounded-lg transition">
      {t("appointment")}
    </button>
  </Link>

  <Link
    to={`/doctors/${doctor.doctorSlug}`}
    className="block"
  >
    <button className="w-full border border-[#009CD0] text-[#009CD0] hover:bg-[#009CD0] hover:text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
      {t("viewProfile")}
      <FaArrowRight size={13} />
    </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default DoctorCard;