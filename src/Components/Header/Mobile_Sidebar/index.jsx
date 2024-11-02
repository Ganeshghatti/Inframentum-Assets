import { Button } from "../../ui/button.jsx";
import { Separator } from "../../ui/separator.jsx";

// REACT ICONS
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "../../ui/sheet.jsx";
import NavigationLinks from "../NavigationLinks";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const onHandle_MobileSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-transparent text-slate-950 hover:bg-transparent">
          <IoMenu size={32} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className=" flex flex-col justify-center items-center space-y-4 rounded-b-3xl pb-10 mt-20"
        side="top"
      >
        <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        <SheetDescription className="hidden"></SheetDescription>
        <div className="py-10">
          <NavigationLinks
            className={"flex flex-col items-center space-y-8 text-2xl"}
            setOpen={setOpen}
          />
        </div>
        <Separator />
        <div>
          <Link
            onClick={onHandle_MobileSideBar}
            to={"/contact"}
            className="bg-secondaryColor text-white px-7 w-full py-5   rounded-lg hover:bg-secondaryColor_hover transition-all duration-200 text-xl"
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
