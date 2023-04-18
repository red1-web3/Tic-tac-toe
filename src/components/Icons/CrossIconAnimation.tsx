import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CrossIconAnimation = () => {
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
      viewBox="0 0 512 512"
      height="2em"
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
        stroke="currentColor"
        strokeWidth={3}
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={controls}
        onAnimationComplete={() => setFill(true)}
      />
    </motion.svg>
  );
};

export default CrossIconAnimation;
