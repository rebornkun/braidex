import Image from "next/image";
import FirstSection from "./FirstSection";
import Partners from "./Partners";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <FirstSection />
      <Partners />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
