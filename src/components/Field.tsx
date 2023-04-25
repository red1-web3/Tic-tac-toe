import React, { useEffect, useState } from "react";
import Box from "./Box";
import { cxm } from "@/utils";
import { motion, stagger, animate } from "framer-motion";
import Borders from "./Borders";

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
  const [boardKey, setBoardKey] = useState(0);

  const handleClick = (i: number) => {
    const copyFileds = [...fields];

    if (copyFileds[i] !== null) return;

    copyFileds[i] = isXTurn ? "O" : "X";
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
        return { list: [a, b, c], name: isXTurn };
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
        { scale: [1, 1.3, 1] },
        { delay: stagger(0.05), duration: 0.3 }
      );
    }, 300);
  }, [winner]);
  console.log(winner, isXTurn);
  return (
    <motion.div
      animate={{
        x: !isFieldNull && !winner ? [0, -10, 10, -10, 10, -10, 10, 0] : 0,
      }}
      transition={{ duration: 0.4 }}
      key={boardKey}
    >
      <div
        className={cxm(
          "absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-borderColor grid grid-cols-3 grid-rows-3 h-[430px] aspect-square bg-primary shadow-xl pb-5 pt-5 scale-[.7] sm:scale-100"
        )}
      >
        {fields.map((field, i) => {
          return (
            <Box
              key={i}
              onClick={() => handleClick(i)}
              className={cxm(
                winner?.list && !winner?.list?.includes(i)
                  ? "pointer-events-none opacity-30"
                  : "_winner"
              )}
              isXTurn={isXTurn}
              field={field}
            />
          );
        })}
        <Borders winner={!!winner?.list?.length} />
      </div>

      <button
        onClick={() => {
          setFields(initialArray);
          setBoardKey((prev) => prev + 1);
        }}
        className="select-none bg-borderColor/30 border shadow border-borderColor px-5 py-1.5 rounded-md text-[#4F3F35] font-bold text-xl absolute bottom-28 left-1/2 -translate-x-1/2"
      >
        Restart game
      </button>
    </motion.div>
  );
};

export default Field;
