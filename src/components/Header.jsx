import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export const Header = () => {
  // pasang hook untuk header active
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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
          containerStyles={`${headerActive ? "top-[80px]" : "top-[100px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white transition-all lg:hidden`}
        />
        {/* dekstop nav - hidden on small device */}
        <Nav containerStyles="flex gap-4 hidden lg:flex" />
        {/* hide/open menu button */}
        <div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-primary-100 lg:hidden transition-all "
          >
            {openNav ? (
              <MdOutlineClose
                className={`text-4xl transition-opacity duration-500 opacity-100 hover:opacity-80`}
              />
            ) : (
              <MdMenu className="text-4xl transition-opacity duration-500 opacity-80 hover:opacity-0" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
