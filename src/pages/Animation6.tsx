import { motion, useAnimationControls } from "framer-motion";


const Animation6 = () => {
  const controls = useAnimationControls();

  const handleForward = () => {
    controls.start({ x: 200 });
  };

  const handleBackward = () => {
    controls.start({ x: -200 });
  };
  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <button onClick={handleForward} className="bg-green-500 mb-10 px-2 py-3">
        Forward
      </button>
      <motion.div
        animate={controls}
        className="w-[200px] h-[200px] bg-blue-500 flex flex-wrap gap-5 justify-center items-center "
      ></motion.div>
      <button onClick={handleBackward} className="bg-green-500 mb-10 px-2 py-3">
        Backward
      </button>
    </div>
  );
};

export default Animation6;
