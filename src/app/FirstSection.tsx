import GlassProduct from "@/components/GlassProduct";
import HomeSwiper from "@/components/HomeSwiper";
import { BagSvg, StarSvg } from "@/components/svg";
import Image from "next/image";

const FirstSection = () => {
  return (
    <section className="h-screen w-full relative">
      <div className="background flex w-full h-full absolute top-0 left-0 right-0 bottom-o m-auto">
        <div className="w-[50%] bg-[#f5d7ce] h-full"></div>
        <div className="w-[50%] bg-green h-full"></div>
      </div>
      <div className="container mx-auto relative px-[20px] h-full">
        <div className="w-full h-full flex flex-col justify-center gap-[1rem] relative">
          <div className="w-[200px] h-[200px] rounded-full bg-[#044e4f] blur-[70px] absolute top-[80px] right-0"></div>
          <div className="w-[200px] h-[200px] rounded-full bg-[#044e4f] blur-[70px] absolute bottom-[-100px] right-[200px]"></div>
          <h1 className="MainFont text-[100%] w-fit font-[500] text-[18vw] leading-[1] text-[#383838DF] ">
            New Fashion.
          </h1>
          <p className="w-[400px] text-[#8F8E8E] text-[16px] 2xl:text-[20px] font-[400] leading-[20px] 2xl:leading-[26px] tracking-[0.2em] mt-[-1.5rem] text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
          <div className="group/button w-fit h-[56px] bg-green text-[#f0e8e8] py-[15px] px-[25px] cursor-pointer  text-[12px] 2xl:text-[16px] font-[400] leading-[0.5] transition-all ease-in-out duration-[300ms] shadow-[3px_3px_rgba(0,0,0,0.9)] hover:shadow-[5px_5px_rgba(0,0,0,0.9)] flex items-center justify-center gap-[5px]">
            Shop Now
            <div className="w-[0px] h-[0px] group-hover/button:h-[20px] group-hover/button:w-[20px] overflow-hidden transition-all ease-in-out duration-[300ms]">
              <BagSvg className="w-[20px] h-[20px] " />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[300px]">
            <HomeSwiper />
          </div>
          <Image
            src={"/womannn.png"}
            alt="hero"
            height={10000}
            width={10000}
            priority
            className="w-[450px] absolute bottom-0 left-0 right-0 m-auto"
          />
          <div className="absolute top-[200px] left-[160px]">
            <GlassProduct
              img={"/hairs/hairOne.webp"}
              type={"black"}
              name="Color 350 4by6 closure"
              price="63,000"
            />
          </div>
          <div className="absolute bottom-[230px] right-[260px]">
            <GlassProduct
              img={"/hairs/hairTwo.webp"}
              type={"white"}
              name="Color 950 9by6 closure"
              price="290,000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
