"use client";
import Link from "next/link";
import { BagOutlineSvg, SearchSvg } from "./svg";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <nav className=" fixed w-full z-[100] h-[80px] ">
      <div className="container mx-auto relative px-[20px] h-full flex justify-between items-center ">
        <SearchSvg className="w-[25px] h-[25px] cursor-pointer" />
        <div className="flex items-center justify-around px-[4rem] flex-1">
          <NavItem name="Home" link="/" color="bg-[#000000]" />
          <NavItem name="Shop" link="/shop" color="bg-[#000000]" />
        </div>
        <p
          role="textbox"
          aria-multiline="true"
          className="MainFont text-[40px] text-white mix-blend-difference"
        >
          BraidsEx
        </p>
        <div className="flex items-center text-[#f0e8e8] justify-around px-[4rem] flex-1">
          <NavItem name="Categories" link="/categories" color="bg-[#f0e8e8]" />
          <NavItem name="About" link="/about" color="bg-[#f0e8e8]" />
        </div>
        <BagOutlineSvg className="w-[25px] h-[25px] cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;

const NavItem = ({
  name,
  link,
  color,
}: {
  name: string;
  link: string;
  color: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`group/navitem ${
        pathname === link ? "font-[400]" : "font-[300] "
      } text-[16px] 2xl:text-[20px] `}
    >
      <div className="w-full flex justify-end">
        <div
          className={`${color} h-[2px] ${
            pathname === link ? "w-[30px]" : "w-[0px] "
          } mt-[.5px] group-hover/navitem:w-[30px] transition-all duration-[300ms] ease-in-out`}
        ></div>
      </div>
      {name}
      <div className="w-full flex justify-start">
        <div
          className={`${color} h-[2px] ${
            pathname === link ? "w-[30px]" : "w-[0px] "
          } mt-[.5px] group-hover/navitem:w-[30px] transition-all duration-[300ms] ease-in-out`}
        ></div>
      </div>
    </Link>
  );
};
