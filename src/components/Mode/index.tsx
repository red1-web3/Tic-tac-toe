import { initialArray } from "@/components/Field";
import ChevronDown from "@/components/Icons/ChevronDown";
import { useBoardKey, useFields, useIsXTurn, useMode } from "@/contexts/jotai";
import { SetStateAction } from "jotai";
import { Dispatch, useState } from "react";

const modes = ["easy", "multiple"];

const Mode = () => {
  const [mode, setMode] = useMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="select-none w-[140px] bg-borderColor/30 border shadow border-borderColor pl-4 pr-2 py-1.5 text-[#4F3F35] font-bold text-base sm:text-xl capitalize flex items-center justify-between"
      >
        {mode} <ChevronDown />
      </button>
      {isModalOpen && <Modal setOpen={setIsModalOpen} />}
    </div>
  );
};

export default Mode;

function Modal({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) {
  const [mode, setMode] = useMode();
  const [fields, setFields] = useFields();
  const [isXTurn, setIsXTurn] = useIsXTurn();
  const [boardKey, setBoardKey] = useBoardKey();

  return (
    <div className="absolute bottom-0 right-0 z-[999] bg-borderColor sm:bg-borderColor/30 py-1 translate-y-[calc(100%+4px)] w-full">
      <ul className="text-start">
        {modes.map((label, i) => (
          <li
            key={i}
            className="py-1 px-3 hover:bg-borderColor/[0.35] duration-200 text-base font-semibold sm:text-[#4F3F35] text-[#3b2d25] capitalize cursor-pointer"
            onClick={() => {
              setMode(label as any);
              setFields(initialArray);
              setBoardKey((prev) => prev + 1);
              setOpen(false);
              setIsXTurn(true);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
