// Hover Effect – scale + slight rotation
export const hoverEffect = {
  scale: 1.05,
  rotate: 2,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};


export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
