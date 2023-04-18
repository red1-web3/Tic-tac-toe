import { cxm } from "@/utils";
import React from "react";
import CircleIcon from "./Icons/CircleIcon";
import CrossIcon from "./Icons/CrossIcon";
import { HTMLMotionProps, motion } from "framer-motion";
import CrossIconAnimation from "./Icons/CrossIconAnimation";
import CircleIconAnimation from "./Icons/CircleIconAnimation";

const Box = ({
  field,
  isXTurn,
  children,
  className,
  ...rest
}: { isXTurn: boolean; field: string } & HTMLMotionProps<"button">) => {
  return (
    <motion.button
      {...rest}
      className={cxm("relative outline-none text-5xl group", className)}
    >
      <span className="flex items-center justify-center">
        <div className="hidden group-hover:block opacity-30">
          {!field && <>{!isXTurn ? <CircleIcon /> : <CrossIcon />}</>}
        </div>
        {field === "O" ? (
          <CircleIconAnimation />
        ) : field === "X" ? (
          <CrossIconAnimation />
        ) : null}
      </span>
    </motion.button>
  );
};

export default Box;
