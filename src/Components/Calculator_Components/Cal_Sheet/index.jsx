/* eslint-disable react/prop-types */

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ResultsDisplay from "../SolarCalculator/ResultsDisplay";

export default function Cal_Result_Sheet({ open, setOpen, results }) {
  return (
    <div className="relative z-[9999]">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          side={"bottom"}
          className="max-lg:w-[90vw] lg:w-[60vw] mx-auto h-[70vh] overflow-y-scroll  bg-bgShade"
        >
          <SheetHeader>
            <SheetTitle className="max-lg:text-2xl text-3xl my-5 text-center text-green-700">
              Results
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div>
            <ResultsDisplay results={results} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
