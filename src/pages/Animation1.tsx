import { motion } from "framer-motion";

const Animation1 = () => {
  const fadeIn = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };
  return (
    <div>
      <motion.div
        className="w-[200px] h-[200px] bg-blue-500"
        variants={fadeIn}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default Animation1;
