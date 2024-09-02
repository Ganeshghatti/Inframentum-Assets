import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// REACT ICONS
import { IoMenu } from "react-icons/io5";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
