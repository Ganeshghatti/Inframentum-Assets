import NavLinks from "../../NavLinks";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// REACT ICONS
import { IoMenu } from "react-icons/io5";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const onHandleNavigate = () => {
    navigate("/contact_us");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent text-slate-950 hover:bg-transparent">
          <IoMenu size={32} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center space-y-8">
        <div className="py-10">
          <NavLinks
            className={"flex flex-col items-center space-y-14 text-2xl"}
          />
        </div>
        <Separator />
        <div className="">
          <Button
            className="bg-secondaryColor text-white p-7 rounded-full hover:bg-secondaryColor_hover transition-all duration-200 text-xl"
            onClick={onHandleNavigate}
          >
            Contact Us
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
