import { useParams } from "react-router-dom";
import doctors from "../data/doctors";

const DoctorDetails = () => {
  const { slug } = useParams();

  const doctor = doctors.find(
    (doc) => doc.doctorSlug === slug
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
          className="rounded-xl shadow-lg w-full"
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

      {doctor.education?.length > 0 && (
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
      )}

      {/* Expertise */}

      {doctor.expertise?.length > 0 && (
        <div className="mt-14">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Areas of Expertise
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {doctor.expertise.map((item, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  <div className="w-1 self-stretch rounded-full bg-[#0096D6]" />

                  <div>

                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* Procedures */}

      {doctor.procedures?.length > 0 && (
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
      )}

      {/* Appointment */}

      {doctor.appointment && (
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
      )}

    </div>
  );
};

export default DoctorDetails;