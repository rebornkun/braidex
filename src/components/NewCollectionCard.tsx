import Image from "next/image";
import { StarSvg } from "./svg";

const NewCollectionCard = ({
  img,
  name,
  price,
  type,
  discount,
  oldPrice,
}: {
  img: string;
  name: string;
  price: number;
  type: string;
  discount?: string;
  oldPrice?: number;
}) => {
  return (
    <div className="group/collection min-w-[300px] min-h-[300px] bg-white shadow px-4 py-8 gap-4 flex flex-col justify-between relative cursor-pointer">
      {discount && (
        <div className="w-[40px] h-[40px] bg-green flex items-center justify-center absolute top-4 left-4 rounded-full">
          <p
            className={` text-[#FFFFFFEA] text-[12px] 2xl:text-[14px] font-[600] leading-[1]`}
          >
            {discount}
          </p>
        </div>
      )}
      <Image
        src={img}
        alt="product"
        height={10000}
        width={10000}
        priority
        className="w-[60%]"
      />
      <div className="flex flex-col gap-2">
        <p
          className={` ${
            type === "black" ? "text-[#0E0E0E]" : "text-[#FFFFFFEA]"
          } text-[16px] 2xl:text-[20px] font-[600] leading-[1] truncate`}
        >
          {name}
        </p>
        <div className="flex gap-4">
          <p
            className={`${
              type === "black" ? "text-[#767676]" : "text-[#BEBEBE]"
            } text-[14px] 2xl:text-[16px] font-[500] leading-[1]`}
          >
            ₦ {price.toLocaleString()}
          </p>
          {oldPrice && (
            <p
              className={`${
                type === "black" ? "text-[#CFCFCF]" : "text-[#BEBEBE]"
              } text-[14px] 2xl:text-[16px] font-[500] leading-[1] line-through`}
            >
              ₦ {oldPrice.toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex gap-[0px] items-center ">
          <StarSvg
            className="w-[15px] h-[15px]"
            color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
          />
          <StarSvg
            className="w-[15px] h-[15px]"
            color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
          />
          <StarSvg
            className="w-[15px] h-[15px]"
            color={`${type === "black" ? "#000000" : "#FFFFFF"}`}
          />
          <StarSvg
            className="w-[15px] h-[15px]"
            color={`${type === "black" ? "#8F8E8E" : "#CAC7C7AB"}`}
          />
          <StarSvg
            className="w-[15px] h-[15px]"
            color={`${type === "black" ? "#8F8E8E" : "#CAC7C7AB"}`}
          />
        </div>
        <div className="absolute right-4 bottom-4 min-w-[40px] h-[40px] rounded-full bg-[#0E0E0E] self-end flex items-center justify-center group-hover/collection:scale-[0.9] group-hover/collection:shadow-md transition-all ease-in-out duration-[300ms] cursor-pointer ">
          <p className="group-hover/collection:rotate-[360deg] group-hover/collection:text-[30px] font-[500] text-[20px] transition-all ease-in-out duration-[1000ms] text-white">
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionCard;
