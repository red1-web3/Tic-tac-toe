import { useMode } from "@/contexts/jotai";
import { cxm } from "@/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import CircleIcon from "./Icons/CircleIcon";
import CircleIconAnimation from "./Icons/CircleIconAnimation";
import CrossIcon from "./Icons/CrossIcon";
import CrossIconAnimation from "./Icons/CrossIconAnimation";

const Box = ({
  field,
  isXTurn,
  children,
  className,
  ...rest
}: { isXTurn: boolean; field: string } & HTMLMotionProps<"button">) => {
  const [mode, setMode] = useMode();

  return (
    <motion.button
      {...rest}
      className={cxm("relative outline-none text-6xl group", className)}
    >
      <span className="flex items-center justify-center">
        <div className="hidden group-hover:block opacity-30 text-[#E4DCCF]">
          {!field && (
            <>
              {isXTurn ? (
                <CrossIcon />
              ) : (
                mode === "multiple" && !isXTurn && <CircleIcon />
              )}
            </>
          )}
        </div>

        {field === "O" ? (
          <span className="text-[#E4DCCF]">
            <CircleIconAnimation />
          </span>
        ) : field === "X" ? (
          <CrossIconAnimation />
        ) : null}
      </span>
    </motion.button>
  );
};

export default Box;
