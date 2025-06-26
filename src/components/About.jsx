import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsSection from "./SkillSection";
import { ChevronDown, ChevronUp } from "lucide-react";

const About = () => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen px-4 md:px-12 py-12 bg-black text-white flex flex-col items-center justify-center"
    >
      {/* About Card */}
      <motion.div
        className="bg-[#1a1a1a] rounded-xl shadow-xl p-6 md:p-12 max-w-4xl w-full"
        whileHover={{
          scale: 1.02,
          rotateZ: [0, -1.5, 1.5, -1, 1, 0],
          boxShadow: "0px 10px 25px rgba(0,0,0,0.6)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center border-b border-gray-700 pb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m{" "}
          <span className="text-blue-400 font-semibold">
            Ramchandra Choudhary
          </span>
          , a Full Stack Developer (MERN) and Freelancer who loves building
          clean, scalable web apps.
          <br />
          <br />
          With hands-on experience in React, Node.js, and MongoDB, I specialize
          in developing fast and user-friendly websites. I’m passionate about
          learning new technologies and always strive to deliver high-quality
          solutions.
          <br />
          <br />
          Whether it's frontend UI design or backend APIs, I enjoy solving
          problems through code and collaborating with others to create
          impactful digital experiences.
        </p>
      </motion.div>

      {/* Toggle Arrow Button */}
      {/* Toggle Arrow Button with Label */}
      <motion.button
        onClick={() => setShowSkills((prev) => !prev)}
        className="mt-6 text-blue-400 hover:text-blue-500 flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
      >
        {showSkills ? (
          <ChevronUp size={36} className="animate-pulse" />
        ) : (
          <ChevronDown size={36} className="animate-bounce" />
        )}
        <span className="mt-1 text-sm font-medium">
          {showSkills ? "Hide Skills" : "Show Skills"}
        </span>
      </motion.button>

      {/* Skills Section */}
      <AnimatePresence>
        {showSkills && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-12 w-full flex justify-center"
          >
            <SkillsSection />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
