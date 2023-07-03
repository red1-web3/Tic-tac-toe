import Field from "@/components/Field";
import Header from "@/components/Header";
import Mode from "@/components/Mode";

export default function Home() {
  return (
    <div className="font-inter h-screen relative bg-primary flex items-center justify-center">
      <div className="flex gap-x-3">
        <div>
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
