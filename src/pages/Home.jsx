import Hero from "../components/Hero";
import LocationReviews from "../components/LocationReviews";
import DoctorSection from "../components/DoctorSection";
import DiagnosticSection from "../components/diagnostic/DiagnosticSection";
import VideoShowcase from "../components/Video/VideoShowcase";

const Home = () => {
  return (
    <>
      <Hero />
      <LocationReviews />
      <DoctorSection />
      <DiagnosticSection/>
      <VideoShowcase />
    </>
  );
};

export default Home;