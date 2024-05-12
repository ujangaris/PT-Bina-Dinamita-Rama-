import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  // pasang hook untuk header active
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(headerActive);
  return (
    <div
      className={`${
        headerActive ? "h-[80px] bg-opacity-70" : "h-[100px]"
      } fixed  top-0 left-0 right-0 w-full bg-white h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="">
          <img src={logo} alt="logo" className="h-7 md:h-9 lg:h-10" />
        </Link>
        {/* mobile nav - hidden on large device */}
        <MobileNav
          containerStyles={`${
            headerActive ? "top-[80px]" : "top-[100px]"
          } flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium lg:hidden`}
        />
        {/* dekstop nav - hidden on small device */}
        <Nav containerStyles="flex gap-4 hidden lg:flex" />
      </div>
    </div>
  );
};
