import { motion } from "framer-motion";

const CircleIcon = () => {
  return (
    <motion.svg
      viewBox="0 0 256 256"
      height="1.6em"
      width="1.6em"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ stroke: "#ccc" }}
      animate={{ stroke: ["#ccc", "#000", "#ccc"] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <motion.path
        d="M 128,128 m -100,0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="629"
        strokeDashoffset="629"
        initial={{ pathLength: 1, pathOffset: 0, strokeDashoffset: 0 }}
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
          opacity: 1,
        }}
      />
      <motion.path
        d="M 128,128 m -78,0 a 78,78 0 1,0 160,0 a 78,78 0 1,0 -160,0"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="566"
        strokeDashoffset="566"
        initial={{ pathLength: 1, pathOffset: 0, strokeDashoffset: 0 }}
      />
    </motion.svg>
  );
};

export default CircleIcon;
