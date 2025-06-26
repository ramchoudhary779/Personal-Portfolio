import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const [loopToggle, setLoopToggle] = useState(false);

  // Trigger re-animation every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopToggle((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {skillsData.map((card, cardIndex) => (
        <motion.div
          key={cardIndex}
          className="bg-[#1a1a1a] rounded-xl p-6 shadow-md border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: cardIndex * 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
            {card.title}
          </h3>

          <div className="space-y-6">
            {card.skills.map((skill, i) => (
              <div key={i}>
                <div className="text-lg font-medium text-white mb-2">
                  <TypeAnimation
                    key={`${loopToggle}-${skill.name}`}
                    sequence={[skill.name, 2000]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </div>

                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    key={`${loopToggle}-${skill.name}-bar`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;
