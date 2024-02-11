import { motion } from "framer-motion";

const Animation2 = () => {
  const fadeIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };
  //   const fadeIn = {
  //     initial: { opacity: 0, scale: 0.9 },
  //     animate: { opacity: 1, scale: 1 },
  //   };

  return (
    <div>
      <motion.div
        className="w-[200px] h-[200px] bg-blue-500 flex flex-wrap gap-5 justify-center items-center"
        variants={fadeIn}
        initial={"initial"}
        animate={"animate"}
        transition={{ duration: 1.5, delayChildren: 1 }}
      >
        <motion.div
          className="bg-blue-300 w-[30%] h-[30%]"
          variants={fadeIn}
        ></motion.div>
        <motion.div
          className="bg-blue-300 w-[30%] h-[30%]"
          variants={fadeIn}
        ></motion.div>
        <motion.div
          className="bg-blue-300 w-[30%] h-[30%]"
          variants={fadeIn}
        ></motion.div>
        <motion.div
          className="bg-blue-300 w-[30%] h-[30%]"
          variants={fadeIn}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Animation2;
