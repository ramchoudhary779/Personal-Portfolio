import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  side = "left",
  title,
  company,
  date,
  desc,
  onMoreClick,
}) => {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`w-full md:w-1/2 px-4 py-4 ${
        isLeft ? "md:pr-12 text-right" : "md:pl-12 text-left"
      }`}
      whileHover={{
        scale: 1.02,
        rotateZ: [0, -1.5, 1.5, -1, 1, 0],
        boxShadow: "0px 10px 25px rgba(254, 243, 199, 1)",
      }}
    >
      <div className="bg-[#121826] border border-gray-700 rounded-xl p-4 shadow-md transition-colors duration-900 ease-in-out hover:shadow-2xl transform hover:scale-105 hover:shadow-amber-50">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">
          {title}
        </h3>
        <p className="text-gray-300 font-medium">{company}</p>
        <p className="text-sm text-gray-400 italic mb-2">{date}</p>
        <p className="text-gray-200">{desc}</p>

        {/* More About Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onMoreClick}
            className="text-lg text-blue-400  hover:text-blue-200 mb-4 mt-0 transition-colors duration-300 hover:shadow-2xl transform hover:scale-120 hover:shadow-amber-100"
          >
            More About
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
