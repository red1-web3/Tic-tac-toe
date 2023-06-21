import { ComponentProps } from "react";

const Restart = (props: ComponentProps<"button">) => {
  return (
    <div className="mx-auto w-fit mt-5">
      <button
        {...props}
        className="select-none bg-borderColor/30 border shadow border-borderColor px-5 py-1.5 rounded-md text-[#4F3F35] font-bold text-xl"
      >
        Restart game
      </button>
    </div>
  );
};

export default Restart;
