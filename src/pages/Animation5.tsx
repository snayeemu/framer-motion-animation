import { motion } from "framer-motion";
import { useRef } from "react";

const Animation5 = () => {
  const parentRef = useRef(null);

  const fadeIn = {
    initial: { opacity: 0, scale: 0.9, x: 0, y: 0 },

    animate: {
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 300, 0, -300],
      opacity: 1,
      scale: 1,
      transition: {
        repeat: Infinity,

        opacity: { duration: 0 },
        duration: 3,
        delayChildren: 1,
      },
    },

    hover: { opacity: 1 },

    tap: { scale: 1 },
  };

  return (
    <div
      ref={parentRef}
      className="border border-red-500 size-[500px] flex justify-center items-center"
    >
      <motion.div
        className="w-[200px] h-[200px] bg-blue-500 flex flex-wrap gap-5 justify-center items-center "
        variants={fadeIn}
        initial={"initial"}
        animate={"animate"}
        whileHover={"hover"}
      ></motion.div>
    </div>
  );
};

export default Animation5;
