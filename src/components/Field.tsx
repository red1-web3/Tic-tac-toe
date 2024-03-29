import PlayAgain from "@/components/buttons/PlayAgain";
import {
  useBoardKey,
  useFields,
  useIsXTurn,
  useMode,
  useOWinCount,
  useXWinCount,
} from "@/contexts/jotai";
import { cxm } from "@/utils";
import { animate, motion, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Borders from "./Borders";
import Box from "./Box";
import Restart from "./buttons/Restart";

interface Field {
  [key: string]: any;
}

interface MatchResult {
  list: number[];
  name: string;
}

export const initialArray = Array(9).fill(null);
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
  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRefWin = useRef<HTMLAudioElement | null>(null);
  const audioRefDraw = useRef<HTMLAudioElement | null>(null);

  const [boardKey, setBoardKey] = useBoardKey();
  const [isXTurn, setIsXTurn] = useIsXTurn();

  const [mode, setMode] = useMode();
  const [fields, setFields] = useFields();

  // Counter
  const [, setXWinCount] = useXWinCount();
  const [, setOWinCount] = useOWinCount();

  const [winner, setWinner] = useState<MatchResult | undefined>();

  useEffect(() => {
    const checkMatch = () => {
      for (let index = 0; index < answerIndex.length; index++) {
        const [a, b, c] = answerIndex[index];
        if (
          fields[a] !== null &&
          fields[a] === fields[b] &&
          fields[b] === fields[c]
        ) {
          return { list: [a, b, c], name: fields[a] } as MatchResult;
        }
      }
    };

    const result = checkMatch();

    setWinner(result);
  }, [answerIndex, fields]);

  const isFieldNull = fields.includes(null);

  // // Counter
  useEffect(() => {
    if (!winner) return;
    if (winner?.name === "X") {
      setXWinCount((prev) => prev + 1);
    } else {
      setOWinCount((prev) => prev + 1);
    }
  }, [winner]);

  // If Win
  useEffect(() => {
    if (!winner) return;
    audioRefWin.current?.play();
    setTimeout(() => {
      animate(
        `._winner`,
        { scale: [1, 1.3, 1] },
        { delay: stagger(0.05), duration: 0.3 }
      );
    }, 300);
  }, [winner]);

  // If Draw
  useEffect(() => {
    if (!isFieldNull && !winner) {
      audioRefDraw.current?.play();
    }

    return () => {};
  }, [isFieldNull, winner]);

  // If double player!
  const handleClick = (i: number) => {
    audioRef.current?.play();

    if (mode !== "multiple" && isXTurn === false) return;

    const copyFileds = [...fields];

    if (copyFileds[i] !== null) return;

    copyFileds[i] = isXTurn ? "X" : "O";
    setFields(copyFileds);
    setIsXTurn((prevTurn) => !prevTurn);
  };

  // If single player!
  useEffect(() => {
    if (isXTurn || mode !== "easy") return;
    if (winner) {
      setIsXTurn(true);
      return;
    }
    const copyFields = [...fields];

    let emptyFields = copyFields.reduce((fields, element, index) => {
      if (element === null || element === "") {
        fields.push(index);
      }
      return fields;
    }, []);

    let randomIndex = Math.floor(Math.random() * emptyFields.length);

    const t = setTimeout(() => {
      copyFields[emptyFields[randomIndex]] = "O";
      setIsXTurn(true);
      setFields(copyFields);
    }, 400);

    return () => clearTimeout(t);
  }, [isXTurn, winner]);

  return (
    <div>
      <motion.div
        animate={{
          x: !isFieldNull && !winner ? [0, -10, 10, -10, 10, -10, 10, 0] : 0,
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
        key={boardKey}
      >
        <div
          className={cxm(
            "border-2 border-borderColor grid grid-cols-3 grid-rows-3 h-[430px] aspect-square bg-primary shadow-md pb-5 pt-5 scale-[.7] sm:scale-100 relative"
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
          <audio ref={audioRef} src={"/put.mp3"}></audio>
          <audio ref={audioRefWin} src={"/win.mp3"}></audio>
          <audio ref={audioRefDraw} src={"/draw.mp3"}></audio>
          {winner || !isFieldNull ? (
            <PlayAgain
              name={winner?.name}
              onClick={() => {
                setWinner(undefined);
                setFields(initialArray);
              }}
            />
          ) : null}
        </div>
      </motion.div>

      <div className="flex items-center gap-x-4 -mt-10 md:mt-3 max-sm:px-7">
        <Restart
          onClick={() => {
            setFields(initialArray);
            setBoardKey((p) => p + 1);
          }}
          text="Reset board"
        />
        <Restart
          onClick={() => {
            setFields(initialArray);
            setBoardKey((p) => p + 1);
            setXWinCount(0);
            setOWinCount(0);
            setWinner(undefined);
          }}
          text="Restart game"
        />
      </div>
    </div>
  );
};

export default Field;
