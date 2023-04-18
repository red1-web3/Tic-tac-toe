import React, { useEffect, useState } from "react";
import Box from "./Box";
import { cxm } from "@/utils";
import { motion, stagger, animate } from "framer-motion";

const answerIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Field = () => {
  const initialArray = Array(9).fill(null);
  const [fields, setFields] = useState(initialArray);
  const [isXTurn, setIsXTurn] = useState(false);

  const handleClick = (i: number) => {
    const copyFileds = [...fields];

    if (copyFileds[i] !== null) return;

    copyFileds[i] = isXTurn ? "X" : "O";
    setFields(copyFileds);
    setIsXTurn((prevTurn) => !prevTurn);
  };

  const checkMatch = () => {
    for (let index = 0; index < answerIndex.length; index++) {
      const [a, b, c] = answerIndex[index];

      if (
        fields[a] !== null &&
        fields[a] === fields[b] &&
        fields[b] === fields[c]
      ) {
        // setTimeout(() => {
        //   setFields(initialArray);
        // }, 2000);
        return [a, b, c];
      }
    }
  };

  const winner = checkMatch();
  const isFieldNull = fields.includes(null);

  useEffect(() => {
    if (!winner) return;

    setTimeout(() => {
      animate(
        `._winner`,
        { scale: [1, 1.8, 1] },
        { delay: stagger(0.08), duration: 0.4 }
      );
    }, 600);
  }, [winner]);

  return (
    <motion.div
      animate={{
        x: !isFieldNull && !winner ? [0, -10, 10, -10, 10, -10, 10, 0] : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cxm(
          "relative border-2 border-borderColor grid grid-cols-3 grid-rows-3 h-[430px] aspect-square bg-primary shadow-xl pb-5 pt-5"
        )}
      >
        {fields.map((field, i) => {
          return (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              className={cxm(
                winner && !winner?.includes(i)
                  ? "pointer-events-none opacity-30"
                  : "_winner"
              )}
              isXTurn={isXTurn}
              field={field}
            />
          );
        })}

        <div className={cxm(winner && "pointer-events-none opacity-30")}>
          <div className="absolute top-1/2 -translate-y-1/2 left-[150px] -translate-x-full h-[calc(100%-50px)] w-[14px] bg-borderColor shadowCustomForBorder"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[293px] -translate-x-full h-[calc(100%-50px)] w-[14px] bg-borderColor shadowCustomForBorder"></div>
          <div className="absolute z-[1] left-1/2 -translate-x-1/2 top-[156px] -translate-y-full w-[calc(100%-40px)] h-[14px] bg-borderColor shadowCustomForBorder"></div>
          <div className="absolute z-[1] left-1/2 -translate-x-1/2 top-[287px] -translate-y-full w-[calc(100%-40px)] h-[14px] bg-borderColor shadowCustomForBorder"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Field;
