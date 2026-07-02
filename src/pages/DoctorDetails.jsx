import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

const DoctorDetails = () => {

  const { slug } = useParams();

  const doctor = doctors.find(
    (doc) => doc.slug === slug
  );

  if (!doctor) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Doctor Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-5">

      {/* Hero */}

      <div className="grid md:grid-cols-3 gap-10">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-xl shadow-lg"
        />

        <div className="md:col-span-2">

          <h1 className="text-4xl font-bold">
            {doctor.name}
          </h1>

          <p className="text-xl text-[#009CD0] mt-2">
            {doctor.designation}
          </p>

          <p className="mt-5">
            {doctor.about}
          </p>

        </div>

      </div>

      {/* Education */}

      <div className="mt-14">

        <h2 className="text-2xl font-bold mb-5">
          Education
        </h2>

        {doctor.education.map((edu, index) => (

          <div key={index} className="mb-4">

            <h3 className="font-semibold">
              {edu.degree}
            </h3>

            <p>{edu.institute}</p>

          </div>

        ))}

      </div>

      {/* Expertise */}

      <div className="mt-14">

        <h2 className="text-2xl font-bold mb-5">
          Expertise
        </h2>

        <ul className="grid md:grid-cols-2 gap-3">

          {doctor.expertise.map((item, index) => (

            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg"
            >
              {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Procedures */}

      <div className="mt-14">

        <h2 className="text-2xl font-bold mb-5">
          Procedures
        </h2>

        <ul className="grid md:grid-cols-2 gap-3">

          {doctor.procedures.map((item, index) => (

            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg"
            >
              {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Appointment */}

      <div className="mt-14 bg-[#009CD0] text-white rounded-xl p-8">

        <h2 className="text-2xl font-bold mb-4">
          Appointment
        </h2>

        <p>{doctor.appointment.hospital}</p>

        <p>{doctor.appointment.address}</p>

        <p>{doctor.appointment.timings}</p>

        <p>{doctor.appointment.phone}</p>

        <p>{doctor.appointment.email}</p>

      </div>

    </div>
  );
};

export default DoctorDetails;