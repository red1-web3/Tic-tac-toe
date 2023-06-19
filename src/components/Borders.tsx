import React from "react";
import { motion } from "framer-motion";
import { cxm } from "@/utils";

function Borders({ winner }: { winner: boolean }) {
  const config = {
    duration: 0.2,
  };
  return (
    <>
      <div
        className={cxm(
          winner
            ? "pointer-events-none opacity-30 duration-200"
            : "pointer-events-auto opacity-80"
        )}
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 380, opacity: 1 }}
          transition={{ duration: config.duration, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 left-[150px] -translate-x-full w-[14px] bg-borderColor/60 shadowCustomForBorder"
        ></motion.div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 380, opacity: 1 }}
          transition={{ duration: config.duration }}
          className="absolute top-1/2 -translate-y-1/2 left-[293px] -translate-x-full h-[calc(100%-50px)] w-[14px] bg-borderColor/60 shadowCustomForBorder"
        ></motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 390, opacity: 1 }}
          transition={{ duration: config.duration }}
          className="absolute z-[1] left-1/2 -translate-x-1/2 top-[156px] -translate-y-full h-[14px] bg-borderColor/60 shadowCustomForBorder"
        ></motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 390, opacity: 1 }}
          transition={{ duration: config.duration }}
          className="absolute z-[1] left-1/2 -translate-x-1/2 top-[287px] -translate-y-full h-[14px] bg-borderColor/60 shadowCustomForBorder"
        ></motion.div>
      </div>
    </>
  );
}

export default Borders;
