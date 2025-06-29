import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Modal from "./Modal";
import { experiences } from "../constants";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const [modalData, setModalData] = useState(null); 


  return (
    <section
      id="experience"
      className="relative bg-black text-white py-20 px-4 md:px-12"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600" />

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center mb-16 relative"
          >
            {idx % 2 === 0 ? (
              <>
                <ExperienceCard
                  {...exp}
                  side="left"
                  onMoreClick={() => setModalData(exp)}
                />
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
                <div className="hidden md:block w-1/2" />
              </>
            ) : (
              <>
                <div className="hidden md:block w-1/2" />
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10" />
                <ExperienceCard
                  {...exp}
                  side="right"
                  onMoreClick={() => setModalData(exp)}
                />
              </>
            )}
          </div>
        ))}
      </div>

      <Modal modalData={modalData} onClose={() => setModalData(null)} />
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
