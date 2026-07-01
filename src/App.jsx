import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Navbar/TopNavbar";
import MainNavbar from "./components/Navbar/MainNavbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;