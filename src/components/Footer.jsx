// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaAmbulance,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0096D6] text-white mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-14">

//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

//           {/* Hospital Info */}

//           <div>

//             <h2 className="text-3xl font-bold">
//               City Healthcare
//             </h2>

//             <p className="mt-5 text-white/90 leading-7">
//               Providing world-class healthcare with experienced doctors,
//               advanced medical facilities and compassionate patient care.
//             </p>

//             <div className="flex gap-4 mt-8">

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
//               >
//                 <FaLinkedinIn />
//               </a>

//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
//               >
//                 <FaYoutube />
//               </a>

//             </div>

//           </div>

//           {/* Quick Links */}

//           <div>

//             <h3 className="text-2xl font-semibold mb-5">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">

//               <li><NavLink to="/" className="hover:underline">Home</NavLink></li>

//               <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>

//               <li><NavLink to="/speciality" className="hover:underline">Specialities</NavLink></li>

//               <li><NavLink to="/doctors" className="hover:underline">Doctors</NavLink></li>

//               <li><NavLink to="/blog" className="hover:underline">Blogs</NavLink></li>

//               <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>

//             </ul>

//           </div>

//           {/* Departments */}

//           <div>

//             <h3 className="text-2xl font-semibold mb-5">
//               Departments
//             </h3>

//             <ul className="space-y-3">

//               <li>Cardiology</li>

//               <li>Neurology</li>

//               <li>Orthopedics</li>

//               <li>Gynecology</li>

//               <li>Pediatrics</li>

//               <li>General Medicine</li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="text-2xl font-semibold mb-5">
//               Contact Us
//             </h3>

//             <div className="space-y-5">

//               <div className="flex gap-4">

//                 <FaMapMarkerAlt className="mt-1 text-xl" />

//                 <span>
//                   City Healthcare Hospital,
//                   Sirsa, Haryana - 125055
//                 </span>

//               </div>

//               <div className="flex gap-4">

//                 <FaPhoneAlt className="mt-1" />

//                 <a href="tel:+919876543210">
//                   +91 98765 43210
//                 </a>

//               </div>

//               <div className="flex gap-4">

//                 <FaEnvelope className="mt-1" />

//                 <a href="mailto:info@cityhealthcare.com">
//                   info@cityhealthcare.com
//                 </a>

//               </div>

//               <div className="flex gap-4">

//                 <FaAmbulance className="mt-1" />

//                 <span>
//                   Emergency : 108
//                 </span>

//               </div>

//               <a
//                 href="https://maps.app.goo.gl/hHF26aXwqRGBHb869"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block mt-3 bg-white text-[#0096D6] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
//               >
//                 View on Google Maps
//               </a>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Bottom Footer */}

//       <div className="border-t border-white/20">

//         <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

//           <p className="text-white/90 text-center md:text-left">
//             © {new Date().getFullYear()} City Healthcare Hospital. All Rights Reserved.
//           </p>

//           <p className="text-white/90 text-center">
//             Designed & Developed by{" "}
//             <span className="font-bold text-white">
//               Camsol Advertising
//             </span>
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaAmbulance,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-[#0096D6] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Hospital Info */}

          <div>

            <h2 className="text-3xl font-bold">
              City Healthcare
            </h2>

            <p className="mt-5 text-white/90 leading-7">
              {t("footerDescription")}
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-[#0096D6] flex items-center justify-center hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              {t("quickLinks")}
            </h3>

            <ul className="space-y-3">

              <li>
                <NavLink to="/" className="hover:underline">
                  {t("home")}
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="hover:underline">
                  {t("about")}
                </NavLink>
              </li>

              <li>
                <NavLink to="/departments" className="hover:underline">
                  {t("departments")}
                </NavLink>
              </li>

              <li>
                <NavLink to="/doctors" className="hover:underline">
                  {t("doctors")}
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="hover:underline">
                  {t("blog")}
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="hover:underline">
                  {t("contact")}
                </NavLink>
              </li>

            </ul>

          </div>

                    {/* Departments */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              {t("departments")}
            </h3>

            <ul className="space-y-3">

              <li>{t("cardiology")}</li>

              <li>{t("neurology")}</li>

              <li>{t("orthopedics")}</li>

              <li>{t("gynecology")}</li>

              <li>{t("pediatrics")}</li>

              <li>{t("generalMedicine")}</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              {t("contactUs")}
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="mt-1 text-xl" />

                <span>
                  City Healthcare Hospital,
                  Sirsa, Haryana - 125055
                </span>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt className="mt-1" />

                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="mt-1" />

                <a href="mailto:info@cityhealthcare.com">
                  info@cityhealthcare.com
                </a>

              </div>

              <div className="flex gap-4">

                <FaAmbulance className="mt-1" />

                <span>
                  {t("emergency")} : 108
                </span>

              </div>

              <a
                href="https://maps.app.goo.gl/hHF26aXwqRGBHb869"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 bg-white text-[#0096D6] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
              >
                {t("viewOnGoogleMaps")}
              </a>

            </div>

          </div>

        </div>


      </div>

            {/* Bottom Footer */}

      <div className="border-t border-white/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/90 text-center md:text-left">
            © {new Date().getFullYear()} {t("copyright")}
          </p>

          <p className="text-white/90 text-center">
            {t("designedBy")}{" "}
            <span className="font-bold text-white">
              Camsol Advertising
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;