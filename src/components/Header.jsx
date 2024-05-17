import { NavEnglish } from "./NavEnglish";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { useEffect, useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import flagEnglish from "../assets/img/flag-english.png";
import flagIndonesia from "../assets/img/flag-indpnesia.png";
import cv from "../assets/img/mdi_file-send-outline.png";
import { NavIndonesia } from "./NavIndonesia";
import { MobileNavIndonesia } from "./MobileNavIndonesia";
import { MobileNavEnglish } from "./MobileNavEnglish";

export const Header = () => {
  // pasang hook untuk header active
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "indonesia"
  );
  const [showDropdown, setShowDropdown] = useState(false);

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
  // console.log(headerActive);

  const toggleLanguage = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };
  // select language
  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    window.location.reload(); // Reload the page to apply the new language
    setShowDropdown(false); // Hide dropdown after language is selected
  };
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
        {language === "indonesia" ? (
          <MobileNavIndonesia
            containerStyles={`${headerActive ? "top-[80px]" : "top-[100px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white transition-all lg:hidden`}
          />
        ) : (
          <MobileNavEnglish
            containerStyles={`${headerActive ? "top-[80px]" : "top-[100px]"} 
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          
          flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base uppercase font-medium text-white transition-all lg:hidden`}
          />
        )}
        {/* dekstop nav - hidden on small device */}
        {language === "indonesia" ? (
          <NavIndonesia containerStyles="flex gap-4 hidden lg:flex uppercase " />
        ) : (
          <NavEnglish containerStyles="flex gap-4 hidden lg:flex uppercase " />
        )}

        {/* send cv & language */}
        <div className=" flex item-center gap-3">
          <div className="relative">
            <img
              src={language === "indonesia" ? flagIndonesia : flagEnglish}
              alt="language flag"
              className="rounded h-5 mt-2 lg:mt-1 lg:h-[26px] cursor-pointer"
              onClick={toggleLanguage}
            />

            {/* Dropdown content */}
            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="py-2 px-4 flex items-center hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectLanguage("indonesia")}
                >
                  <img
                    src={flagIndonesia}
                    alt="Indonesia"
                    className="h-5 mr-2"
                  />
                  Indonesia
                </div>
                <div
                  className=" py-2 px-4 flex items-center hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectLanguage("english")}
                >
                  <img src={flagEnglish} alt="English" className="h-5 mr-2" />
                  English
                </div>
              </div>
            )}
          </div>
          <button className="flex items-center bg-hijauMuda rounded-full h-7 py-2 px-2 mt-1 font-bold  text-white text-xs hover:bg-hijauMuda/70">
            <p className="">Send CV </p>
            <span>
              <img src={cv} alt="cv" className="h-4 " />
            </span>
          </button>

          {/* hide/open menu button */}

          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-primary-100 lg:hidden transition-all "
          >
            {openNav ? (
              <MdOutlineClose
                className={`text-4xl transition-opacity duration-500 opacity-100 hover:opacity-80`}
              />
            ) : (
              <MdMenu className="text-4xl transition-opacity duration-500 opacity-100 hover:opacity-80" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
