import { useParams } from "react-router-dom";
import doctors from "../data/doctors";
import {
  FaUserMd,
  FaHospital,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaCertificate,
  FaStethoscope,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";

const DoctorDetails = () => {
  const { slug } = useParams();

  const doctor = doctors.find((doc) => doc.slug === slug);

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold">
          Doctor Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-5 py-12">

        {/* Hero */}

        <div className="bg-white rounded-2xl border border-gray-200 p-8">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Image */}

            <div className="flex justify-center">

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-80 rounded-2xl object-cover"
              />

            </div>

            {/* Info */}

            <div className="lg:col-span-2">

              <h1 className="text-4xl font-bold">
                {doctor.name}
              </h1>

              <p className="text-[#009CD0] text-xl mt-2 font-semibold">
                {doctor.designation}
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-8">

                <Info
                  icon={<FaUserMd />}
                  title="Department"
                  value={doctor.department}
                />

                <Info
                  icon={<FaGraduationCap />}
                  title="Qualification"
                  value={doctor.qualifications.join(", ")}
                />

                <Info
                  icon={<FaClock />}
                  title="Experience"
                  value={doctor.experience}
                />

                <Info
                  icon={<FaGlobe />}
                  title="Languages"
                  value={doctor.languages.join(", ")}
                />

                <Info
                  icon={<FaHospital />}
                  title="Hospital"
                  value={doctor.hospital.name}
                />

              </div>

              <button className="mt-10 bg-[#009CD0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0080ad]">
                Book Appointment
              </button>

            </div>

          </div>

        </div>

        {/* About */}

        <Section title="About Doctor">
          <p className="leading-8 text-gray-700">
            {doctor.about}
          </p>
        </Section>

        {/* Education */}

        <Section title="Education">

          {doctor.education.map((edu, index) => (
            <Item
              key={index}
              text={`${edu.degree} • ${edu.institute}`}
            />
          ))}

        </Section>

        {/* Expertise */}

        <Section title="Clinical Expertise">

          <GridList items={doctor.expertise} />

        </Section>

        {/* Services */}

        <Section title="Services Offered">

          {doctor.services.map((service, index) => (

            <div
              key={index}
              className="mb-6"
            >

              <h3 className="font-semibold text-lg">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-1">
                {service.description}
              </p>

            </div>

          ))}

        </Section>

        {/* Conditions */}

        <Section title="Conditions Treated">

          <GridList
            items={doctor.conditionsTreated}
          />

        </Section>

        {/* Certifications */}

        <Section title="Certifications">

          <GridList
            items={doctor.certifications}
          />

        </Section>

        {/* Membership */}

        <Section title="Professional Memberships">

          <GridList
            items={doctor.memberships}
          />

        </Section>

        {/* Contact */}

        <Section title="Hospital Information">

          <div className="space-y-5">

            <Info
              icon={<FaHospital />}
              title="Hospital"
              value={doctor.hospital.name}
            />

            <Info
              icon={<FaPhoneAlt />}
              title="Phone"
              value={doctor.phone}
            />

            <Info
              icon={<FaEnvelope />}
              title="Email"
              value={doctor.email}
            />

            <Info
              icon={<FaClock />}
              title="OPD Timing"
              value={`${doctor.availability.days.join(", ")}
              • ${doctor.availability.timing}`}
            />

          </div>

        </Section>

      </div>

    </div>
  );
};

export default DoctorDetails;

function Section({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex gap-4">

      <div className="text-[#009CD0] mt-1">
        {icon}
      </div>

      <div>

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <p className="font-medium">
          {value}
        </p>

      </div>

    </div>
  );
}

function Item({ text }) {
  return (
    <div className="flex gap-3 mb-3">

      <FaGraduationCap className="text-[#009CD0] mt-1" />

      <span>{text}</span>

    </div>
  );
}

function GridList({ items }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">

      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-3"
        >

          <FaCheckCircle className="text-green-500 mt-1" />

          <span>{item}</span>

        </div>
      ))}

    </div>
  );
}