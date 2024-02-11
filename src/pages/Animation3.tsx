import { motion } from "framer-motion";

const Animation3 = () => {
  const fadeIn = {
    initial: { opacity: 0, scale: 0.9 },

    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, delayChildren: 1 },
    },

    hover: { scale: 1.1, transition: { duration: 2 } },

    tap: { scale: 1 },
  };

  return (
    <div>
      <motion.div
        className="w-[200px] h-[200px] bg-blue-500 flex flex-wrap gap-5 justify-center items-center"
        variants={fadeIn}
        initial={"initial"}
        animate={"animate"}
        whileHover={"hover"}
        whileTap={"tap"}
        onHoverStart={() => console.log("hover start")}
        onHoverEnd={() => console.log("hover ended")}
      ></motion.div>
    </div>
  );
};

export default Animation3;
