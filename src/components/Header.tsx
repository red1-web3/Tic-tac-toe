import CircleIcon from "@/components/Icons/CircleIcon";
import CrossIcon from "@/components/Icons/CrossIcon";

const Header = () => {
  return (
    <header className="mb-3">
      <div className="flex items-center gap-x-4">
        <div className="select-none bg-borderColor/30 border shadow border-borderColor px-5 h-11 cursor-pointer text-[#4F3F35] font-bold text-lg w-full flex justify-between items-center">
          <CrossIcon />
          <span className="text-2xl">--</span>
        </div>
        <div className="select-none bg-borderColor/30 border shadow border-borderColor px-5 h-11 cursor-pointer text-[#4F3F35] font-bold text-lg w-full flex justify-between items-center">
          <CircleIcon />
          <span className="text-2xl">--</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
