import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/ProfilePhoto.jpg";
import { ChevronDown } from "lucide-react";


const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className=" relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-20 gap-10 bg-black text-white mt-20 pt-6">
      {/* Left Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow:md">
          Hi, I am <span className="text-blue-500">Ramchandra Choudhary</span>
        </h1>

        <div className="text-3xl md:text-4xl font-medium text-yellow-300 shadow:md">
          <TypeAnimation
            sequence={["MERN Stack Developer", 2000, "Freelancer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* 🔽 Buttons */}
        <div className="mt-8 flex gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition "
          >
            Hire Me
          </motion.a>

          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md shadow-lg hover:bg-blue-50 dark:hover:bg-white/10 transition "
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profile}
          alt="profile"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500  shadow-2xl hover:scale-110 shadow-amber-200 hover:shadow-[0_0_15px_#22d3ee] "
        />
        
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about">
          <ChevronDown
            size={64}
            className="animate-bounce text-blue-500 hover:text-blue-600 transition"
          />
        </a>
      </motion.div>
     <AnimatePresence>
  {showModal && (
    <motion.div
      onClick={() => setShowModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-6 max-w-2xl w-full relative"
      >
        <button
          className="absolute top-2 right-3 text-black text-xl"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center text-black">Resume Preview</h2>
        <iframe
          src="/Resumelatest.pdf"
          className="w-full h-[400px] border"
          title="Resume"
        ></iframe>
        <div className="flex justify-center mt-4">
          <a
            href="/Resumelatest.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Download
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Hero;
