import { ComponentProps } from "react";

const Restart = ({
  text,
  ...props
}: { text: string } & ComponentProps<"button">) => {
  return (
    <div className="mx-auto w-full">
      <button
        {...props}
        className="select-none w-full bg-borderColor/30 border shadow border-borderColor px-5 py-1.5 rounded-md text-[#4F3F35] font-bold text-base lg:text-xl"
      >
        {text}
      </button>
    </div>
  );
};

export default Restart;
