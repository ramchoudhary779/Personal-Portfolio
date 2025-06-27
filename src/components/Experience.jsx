import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../constants";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-black text-white py-20 px-4 md:px-12"
    >
      <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

      {/* Vertical timeline line */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600" />

        {/* Experience cards */}
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center mb-16 relative"
          >
            {/* Card */}
            {idx % 2 === 0 ? (
              <>
                <ExperienceCard {...exp} side="left" />
                {/* Circle */}
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
                <div className="hidden md:block w-1/2" />
              </>
            ) : (
              <>
                <div className="hidden md:block w-1/2" />
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
                <ExperienceCard {...exp} side="right" />
              </>
            )}
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a href="#projects">
          <ChevronDown
            size={64}
            className="animate-bounce text-blue-500 hover:text-blue-600 transition"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Experience;
