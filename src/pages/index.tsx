import Field from "@/components/Field";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="font-inter h-screen relative bg-primary flex items-center justify-center">
      <div>
        <Header />
        <Field />
      </div>
    </div>
  );
}
