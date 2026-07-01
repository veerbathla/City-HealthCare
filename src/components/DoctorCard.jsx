import React from "react";
import { FaUserMd, FaBriefcaseMedical, FaHospital } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">

      <div className="flex">

        {/* Left Side */}
        <div className="w-40 bg-gray-50 flex flex-col items-center p-4">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-28 h-36 object-cover rounded-xl"
          />

          <button className="mt-4 w-full bg-[#009CD0] hover:bg-[#007aa5] text-white text-sm font-semibold py-2 rounded-lg transition">
            Book Appointment
          </button>

        </div>

        {/* Right Side */}
        <div className="flex-1 p-5 flex flex-col justify-between">

          <div>

            <h3 className="text-2xl font-bold text-gray-800">
              {doctor.name}
            </h3>

            <div className="mt-4 space-y-3">

              <div className="flex items-center gap-3 text-gray-600">
                <FaUserMd className="text-[#009CD0]" />
                <span>{doctor.department}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaBriefcaseMedical className="text-[#009CD0]" />
                <span>{doctor.experience} Experience</span>
              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="border-t pt-3 mt-6 flex items-center gap-3">

            <FaHospital className="text-[#009CD0]" />

            <span className="font-medium text-gray-700">
              City Healthcare Hospital
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DoctorCard;