import { motion } from "framer-motion";
import { useRef } from "react";

const Animation4 = () => {
  const parentRef = useRef(null);

  const fadeIn = {
    initial: { opacity: 0, scale: 0.9 },

    animate: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: 1.5, delayChildren: 1 },
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
        drag
        dragConstraints={parentRef}
      ></motion.div>
    </div>
  );
};

export default Animation4;
