import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CircleAnimation = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controlsMiddle = useAnimation();
  const [fill, setFill] = useState(false);

  useEffect(() => {
    controls.start({
      pathLength: 1,
      pathOffset: 0,
      strokeDashoffset: 0,
      transition: fill ? { duration: 0.3 } : { duration: 0.3 },
    });
    controls2.start({
      pathLength: 1,
      pathOffset: 0,
      strokeDashoffset: 0,
      transition: fill ? { duration: 0.3 } : { duration: 0.3 },
    });
    controlsMiddle.start({
      opacity: 1,
      transition: fill ? { duration: 0.1 } : { duration: 0.1, delay: 6 },
    });
  }, [controls, controlsMiddle, controls2, fill]);

  return (
    <motion.svg
      viewBox="0 0 256 256"
      height="1.6em"
      width="1.6em"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ stroke: "#ccc" }}
      animate={{ stroke: ["#ccc", "#000", "#ccc"] }}
      transition={{ duration: 1.5 }}
    >
      <motion.path
        d="M 128,128 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="629"
        strokeDashoffset="629"
        initial={{ pathLength: 1, pathOffset: 1, strokeDashoffset: 629 }}
        animate={controls}
        onAnimationComplete={() => setFill(true)}
      />
      <motion.path
        d="M 128,128 m -90,0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0"
        stroke="currentColor"
        strokeWidth={28}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="629"
        strokeDashoffset="629"
        initial={{
          pathLength: 1,
          pathOffset: 0,
          strokeDashoffset: 0,
          opacity: 0,
        }}
        animate={controlsMiddle}
        onAnimationComplete={() => setFill(true)}
      />
      <motion.path
        d="M 128,128 m -78,0 a 78,78 0 1,0 160,0 a 78,78 0 1,0 -160,0"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="566"
        strokeDashoffset="566"
        initial={{
          pathLength: 0,
          pathOffset: 1,
          strokeDashoffset: 566,
          rotate: 180,
        }}
        animate={controls}
        onAnimationComplete={() => setFill(true)}
      />
    </motion.svg>
  );
};

export default CircleAnimation;
