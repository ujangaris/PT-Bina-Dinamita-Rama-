import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
export const Header = () => {
  return (
    <div className="fixed left-0 right-0 w-full bg-white h-[100px]">
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="">
          <img src={logo} alt="logo" className="h-7 md:h-9 lg:h-10" />
        </Link>
        {/* mobile nav - hidden on large device */}
        <MobileNav containerStyles="lg:hidden" />
        {/* dekstop nav - hidden on small device */}
        <Nav containerStyles="flex gap-4 hidden lg:flex" />
      </div>
    </div>
  );
};
