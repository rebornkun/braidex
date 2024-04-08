import { TbNorthStar } from "react-icons/tb";
import ArrowBtn from "@/components/ArrowBtn";
import NewCollectionCard from "@/components/NewCollectionCard";
import { GateSvg } from "@/components/svg";

const ThirdSection = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <GateSvg className="absolute right-4 bottom-[60px] z-[1] scale-[1.3]" />
      <div className="container mx-auto relative flex flex-col h-full w-full px-[20px] justify-center gap-[6rem] items-center overflow-visible z-[2]">
        <div className="flex w-full justify-between">
          <div className="text flex  gap-2 z-[2] relative h-fit w-fit">
            <TbNorthStar className="text-green text-[18px] animate-ping absolute right-0" />
            <h1 className="MainFont text-[#383838] text-[42px] 2xl:text-[50px] font-[400] leading-[50px] 2xl:leading-[70px] tracking-[-0.02em]">
              New Collection
            </h1>
          </div>
          <ArrowBtn text={"All Collection"} link={"/"} />
        </div>
        <div className="w-full flex gap-4 py-4 px-4 w-full overflow-scroll">
          <NewCollectionCard
            img={"/hairs/hairOne.webp"}
            name="Color 45 renew"
            price={400000}
            type="black"
          />
          <NewCollectionCard
            img={"/hairs/SUPERSOFT_480x.webp"}
            name="Color 45 renew"
            price={384000}
            type="black"
            discount={"20%"}
            oldPrice={480000}
          />
          <NewCollectionCard
            img={"/hairs/Darling-Empress-CurlyBraid-27_1024x1024.webp"}
            name="Color 45 renew"
            price={400000}
            type="black"
          />
          <NewCollectionCard
            img={"/hairs/Easy-Braid-7X_1024x1024.webp"}
            name="Color 45 renew"
            price={400000}
            type="black"
          />
          <NewCollectionCard
            img={"/hairs/hairOne.webp"}
            name="Color 45 renew"
            price={400000}
            type="black"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
