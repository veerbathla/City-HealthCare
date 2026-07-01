import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-[calc(100vh-144px)] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/doctors.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Your Health <br />
            Our Priority
          </motion.h1>

          <motion.p
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2}}
            className="text-white mt-6 text-xl max-w-xl"
          >
            Providing world-class healthcare with experienced doctors,
            advanced technology and compassionate care.
          </motion.p>

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4}}
            className="flex gap-5 mt-10"
          >
            <button className="bg-[#009CD0] text-white px-8 py-4 rounded-full hover:bg-cyan-700 transition">
              Book Appointment
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Call Now
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;