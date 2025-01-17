import { Link } from "react-router-dom";
import Logo from "./Logo";
import SideBar from "./Mobile_Sidebar";
import NavigationLinks from "./NavigationLinks";

import { FaCalculator } from "react-icons/fa";

export default function Header() {
  return (
    <div className="border-b shadow-lg py-3 sticky top-0 bg-white z-[9999]">
      <div className="flex items-center justify-between max-lg:container  max-lg:mx-auto px-10">
        {/* LOGO */}
        <div>
          <Logo />
        </div>
        {/* NAVIGATION LInKS */}
        <div className="hidden xl:flex">
          <NavigationLinks
            className={"flex items-center gap-10 text-base font-medium"}
          />
        </div>
        <div className="hidden xl:flex items-center gap-6">
          <Link
            to={"/contact"}
            className="bg-secondaryColor text-white text-sm md:text-base  px-7 py-3 rounded-full hover:bg-secondaryColor_hover/80 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
        {/* MOBILE SIDEBAR */}
        <div className="xl:hidden">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
