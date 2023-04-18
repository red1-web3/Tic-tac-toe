import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CircleAnimation = () => {
  const controls = useAnimation();
  const [fill, setFill] = useState(false);

  useEffect(() => {
    controls.start({
      pathLength: 1,
      pathOffset: 0,
      fill: fill ? "black" : "none",
      transition: fill ? { duration: 0.6 } : { duration: 0.6 },
    });
  }, [controls, fill]);

  return (
    <motion.svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={3}
      viewBox="0 0 256 256"
      height="1.6em"
      width="1.6em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 128,128 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
        stroke="currentColor"
        strokeWidth={3}
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={controls}
        onAnimationComplete={() => setFill(true)}
      />
    </motion.svg>
  );
};

export default CircleAnimation;
