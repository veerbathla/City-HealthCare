// // import { motion } from "framer-motion";

// // const Hero = () => {
// //   return (
// //     <section
// //       className="relative h-[calc(100vh-144px)] bg-cover bg-center"
// //       style={{
// //         backgroundImage:
// //           "url('/doctors.jpg')",
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black/45"></div>

// //       <div className="relative z-10 flex h-full items-center">
// //         <div className="max-w-7xl mx-auto px-6">

// //           <motion.h1
// //             initial={{opacity:0,y:40}}
// //             animate={{opacity:1,y:0}}
// //             transition={{duration:0.8}}
// //             className="text-5xl lg:text-7xl font-bold text-white leading-tight"
// //           >
// //             Your Health <br />
// //             Our Priority
// //           </motion.h1>

// //           <motion.p
// //             initial={{opacity:0,y:30}}
// //             animate={{opacity:1,y:0}}
// //             transition={{delay:0.2}}
// //             className="text-white mt-6 text-xl max-w-xl"
// //           >
// //             Providing world-class healthcare with experienced doctors,
// //             advanced technology and compassionate care.
// //           </motion.p>

// //           <motion.div
// //             initial={{opacity:0}}
// //             animate={{opacity:1}}
// //             transition={{delay:0.4}}
// //             className="flex gap-5 mt-10"
// //           >
// //             <button className="bg-[#009CD0] text-white px-8 py-4 rounded-full hover:bg-cyan-700 transition">
// //               Book Appointment
// //             </button>

// //             <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
// //               Call Now
// //             </button>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// import hero1 from "../assets/hero/hero1.jpeg";
// import hero2 from "../assets/hero/hero2.jpeg";

// const images = [hero1, hero2];

// const Hero = () => {
//   const { t } = useTranslation();
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[calc(100vh-144px)] min-h-[550px] overflow-hidden">

//       {/* Background Images */}
//       {images.map((image, index) => (
//         <motion.div
//           key={index}
//           initial={false}
//           animate={{
//             opacity: currentImage === index ? 1 : 0,
//             scale: currentImage === index ? 1 : 1.08,
//           }}
//           transition={{
//             opacity: { duration: 1.2 },
//             scale: { duration: 6 },
//           }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">

//           <div className="max-w-3xl text-left">

//             <motion.h1
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="
//                 text-white
//                 font-bold
//                 leading-tight
//                 text-4xl
//                 sm:text-5xl
//                 lg:text-6xl
//                 xl:text-7xl
//               "
//             >
//               {t("heroTitle1")}
//               <br />
//               {t("heroTitle2")}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="
//                 mt-6
//                 text-white/90
//                 leading-relaxed
//                 max-w-2xl
//                 text-base
//                 sm:text-lg
//                 lg:text-xl
//               "
//             >
//               {t("heroDescription")}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="mt-10 flex flex-col sm:flex-row gap-4"
//             >
//               <button className="bg-[#009CD0] hover:bg-[#0087b5] text-white px-8 py-4 rounded-full font-semibold transition">
//                 {t("appointment")}
//               </button>

//               <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
//                 {t("callNow")}
//               </button>
//             </motion.div>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;




import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero1.jpeg";
import hero2 from "../assets/hero/hero2.jpeg";

const images = [hero1, hero2];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black">
      <img
        src={images[currentImage]}
        alt="City HealthCare"
        className="w-full h-auto block"
        draggable={false}
      />
    </section>
  );
};

export default Hero;