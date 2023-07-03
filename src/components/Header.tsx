import CircleIcon from "@/components/Icons/CircleIcon";
import CrossIcon from "@/components/Icons/CrossIcon";
import { useOWinCount, useXWinCount } from "@/contexts/jotai";

const Header = () => {
  // Counter
  const [xWinCount, setXWinCount] = useXWinCount();
  const [oWinCount, setOWinCount] = useOWinCount();

  return (
    <header className="mb-3">
      <div className="flex items-center gap-x-3">
        <div className="select-none bg-borderColor/30 border shadow border-borderColor px-5 h-11 cursor-pointer text-[#4F3F35] font-bold text-lg w-full flex justify-between items-center">
          <CrossIcon />
          <span className="text-2xl"> {xWinCount ? xWinCount : "--"}</span>
        </div>
        <div className="select-none bg-borderColor/30 border shadow border-borderColor px-5 h-11 cursor-pointer text-[#4F3F35] font-bold text-lg w-full flex justify-between items-center">
          <CircleIcon />
          <span className="text-2xl"> {oWinCount ? oWinCount : "--"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
