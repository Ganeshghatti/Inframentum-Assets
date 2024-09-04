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

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent text-slate-950 hover:bg-transparent">
          <IoMenu size={32} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center space-y-8">
        <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        <SheetDescription className="hidden"></SheetDescription>
        <div className="py-10">
          <NavigationLinks
            className={"flex flex-col items-center space-y-14 text-2xl"}
          />
        </div>
        <Separator />
        <div className="">
          <a
            href="#"
            className="bg-secondaryColor text-white px-7 py-5 rounded-lg hover:bg-secondaryColor_hover transition-all duration-200 text-xl"
          >
            Contact Us
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
