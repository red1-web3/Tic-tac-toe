import React, { ComponentProps, ReactHTMLElement } from "react";

const RestartButton = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="select-none bg-borderColor/30 border shadow border-borderColor px-5 py-1.5 rounded-md text-[#4F3F35] font-bold text-xl absolute bottom-28 left-1/2 -translate-x-1/2"
    >
      Restart game
    </button>
  );
};

export default RestartButton;
