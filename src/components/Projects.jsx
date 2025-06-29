import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fadeIn, hoverEffect } from "../utils/motion";
import { projects } from "../constants";
import { ChevronDown } from "lucide-react";


const Projects = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <section id="projects" className="relative py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">My Projects</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-700 shadow-lg  transition-shadow duration-300"
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={fadeIn("up", "spring", 0.2, 0.6)}
            whileHover={hoverEffect}
          >
            <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <button
              onClick={() => setModalData(project)}
              className="text-lg text-blue-400  hover:text-blue-200 mb-4 mt-0 transition-colors duration-300 hover:shadow-2xl transform hover:scale-120 hover:shadow-amber-100"
            >
              More About
            </button>
            <div className="flex gap-4 ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200  transition-colors duration-300 hover:shadow-2xl transform hover:scale-110"
              >
                <FaGithub className="inline mr-2" /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 hover:shadow-2xl transform hover:scale-110"
                >
                  <FaExternalLinkAlt className="inline mr-2" /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            onClick={() => setModalData(null)}
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
                onClick={() => setModalData(null)}
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4 text-center text-black">
                {modalData.title}
              </h2>
              <p className="text-black mb-4">{modalData.more}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={modalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                {modalData.live && (
                  <a
                    href={modalData.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
       <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute bottom-6 left-1/2 transform -translate-x-1/2 "
             >
               <a href="#contact">
                 <ChevronDown
                   size={64}
                   className="animate-bounce text-blue-500 hover:text-blue-600 transition"
                 />
               </a>
             </motion.div>
      
    </section>
  );
};

export default Projects;
