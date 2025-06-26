import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/ProfilePhoto.jpg";
import { ChevronDown } from "lucide-react"; 

const Hero = () => {
  return (
    <section className=" relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-20 gap-10 bg-black text-white ">
      {/* Left Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-blue-500">Ramchandra Choudhary</span>
        </h1>

        <div className="text-3xl md:text-4xl font-medium text-yellow-300">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Hire Me
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md shadow-md hover:bg-blue-50 dark:hover:bg-white/10 transition"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profile}
          alt="profile"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-lg"
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
    </section>
  );
};

export default Hero;
