import React from "react";


import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhyChooseUs from "./WhyChooseUs";
import ServicesSection from "./ServicesSection";
import TreatmentsSection from "./TreatmentsSection";
import ConditionsSection from "./ConditionsSection";
import DiagnosticsSection from "./DiagnosticsSection";
import FacilitiesSection from "./FacilitiesSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

const DepartmentTemplate = ({ department }) => {
  if (!department) return null;

  
  const diagnostics =
    department.diagnostics?.tests ||
    department.imagingServices ||
    department.laboratorySections ||
    department.diagnosticServices ||
    [];


  const conditions =
    department.conditionsWeTreat ||
    department.investigationsFor ||
    department.symptomsEvaluated ||
    [];
    console.log(department);
    console.log(department.hero);

  return (
    <main className="bg-white overflow-hidden">

    

      <HeroSection
        hero={department.hero}
        name={department.name}
        contact={department.contact}
      />

      

      {department.overview && (
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFE] to-white"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection overview={department.overview} />
          </div>
        </section>
      )}

      

      {department.whyChooseUs && (
        <section className="py-24 bg-[#F8FCFE]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <WhyChooseUs data={department.whyChooseUs} />
          </div>
        </section>
      )}

      
      {department.treatments?.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <TreatmentsSection
              treatments={department.treatments}
            />
          </div>
        </section>
      )}

      

      {department.services?.length > 0 && (
        <section className="py-24 bg-[#F8FCFE]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ServicesSection
              title="Our Services"
              data={department.services}
              simple={true}
            />
          </div>
        </section>
      )}

      

      {conditions.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ConditionsSection
              conditions={conditions}
            />
          </div>
        </section>
      )}

     

      {diagnostics.length > 0 && (
        <section className="py-24 bg-[#F8FCFE]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <DiagnosticsSection
              diagnostics={diagnostics}
            />
          </div>
        </section>
      )}

      

      {department.facilities?.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FacilitiesSection
              facilities={department.facilities}
            />
          </div>
        </section>
      )}

      

      {department.faqs?.length > 0 && (
        <section className="py-24 bg-[#F8FCFE]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <FAQSection faqs={department.faqs} />
          </div>
        </section>
      )}

      

      {department.contact && (
        <section className="pt-10 pb-24 bg-gradient-to-b from-[#F8FCFE] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ContactSection contact={department.contact} />
          </div>
        </section>
      )}

    </main>
  );
};

export default DepartmentTemplate;