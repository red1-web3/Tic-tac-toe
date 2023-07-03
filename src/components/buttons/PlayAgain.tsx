import { cxm } from "@/utils";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

const PlayAgain = ({
  className,
  name,
  ...rest
}: { name?: string } & ComponentProps<"button">) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.4 } }}
      className={cxm(
        "absolute inset-0 bg-black/70 flex justify-center flex-col gap-y-5 items-center"
      )}
    >
      <div className="text-5xl font-semibold text-primary">
        {name ? `${name} is Win!` : "Draw!"}{" "}
      </div>
      <button
        {...rest}
        className={cxm(
          className,
          "select-none bg-zinc-800 border shadow border-borderColor px-5 py-1.5 rounded-md text-primary font-bold text-xl"
        )}
      >
        Play again?
      </button>
    </motion.div>
  );
};

export default PlayAgain;
