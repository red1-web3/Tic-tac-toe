import Field from "@/components/Field";
import Header from "@/components/Header";
import Mode from "@/components/Mode";

export default function Home() {
  return (
    <div className="font-inter h-[115vh] lg:h-screen max-lg:w-[115vw] relative bg-primary flex items-center justify-center">
      <div className="flex max-sm:flex-col gap-x-3">
        <div className="max-sm:px-7 max-sm:translate-y-[40px] max-sm:w-fit relative z-[999999]">
          <Mode />
        </div>
        <div>
          <Header />
          <Field />
        </div>
      </div>
    </div>
  );
}
