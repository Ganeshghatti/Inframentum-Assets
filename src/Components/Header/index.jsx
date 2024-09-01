import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SideBar from "./Mobile_Menu/Sidebar";

export default function Header() {
  const navigate = useNavigate();

  //HANDLE CONTACT FUNCTION
  const onHandleContactUS_Btn = () => {
    navigate("/contact_us");
  };

  return (
    <div className="border-b shadow-lg py-3 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between container mx-auto">
        {/* LOGO */}
        <div>
          <Logo />
        </div>
        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex">
          <NavLinks className={"flex items-center gap-14 text-base"} />
        </div>
        {/* CONTACT US */}
        <div className="hidden lg:flex">
          <Button
            className={
              "bg-secondaryColor text-white text-sm md:text-base  px-5 py-3 rounded-full hover:bg-secondaryColor_hover transition-all duration-200"
            }
            text={"Contact Us"}
            on_Click={onHandleContactUS_Btn}
          />
        </div>
        {/* HAMBURGER MENU*/}
        <div className="lg:hidden">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
