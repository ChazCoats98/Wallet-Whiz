import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

const ComponentLoader = () => {
    return (
        <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
        <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
    </motion.svg>
    )
};

export default ComponentLoader;