import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Navbar/TopNavbar";
import MainNavbar from "./components/Navbar/MainNavbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import About from "./pages/About";
import DepartmentDetails from "./pages/DepartmentDetails";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import Departments from "./pages/Speciality";

import "./i18n";


function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      {/* Main Content */}
      <main className="pb-16 lg:pb-0">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Doctors */}
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<DoctorDetails />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} />
          <Route
            path="/departments/:slug"
            element={<DepartmentDetails />}
          />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;