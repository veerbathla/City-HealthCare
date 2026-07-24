import Hero from "../components/Hero";
import LocationReviews from "../components/LocationReviews";
import DoctorSection from "../components/DoctorSection";
import DiagnosticSection from "../components/diagnostic/DiagnosticSection";

const Home = () => {
  return (
    <>
      <Hero />
      <LocationReviews />
      <DoctorSection />
      <DiagnosticSection/>
    </>
  );
};

export default Home;