import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../Components/ui/sheet";
import ResultsDisplay from "../SolarCalculator/ResultsDisplay";

export default function Cal_Result_Sheet({ open, setOpen, results }) {
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger />
        <SheetContent
          side={"bottom"}
          className="max-lg:w-[90vw] lg:w-[60vw] mb-[5%] mx-auto h-[70vh] overflow-y-scroll bg-bgShade"
        >
          <SheetHeader>
            <SheetTitle className="max-lg:text-2xl text-3xl my-5 text-center text-green-700">
              Results
            </SheetTitle>
          </SheetHeader>

          {/* Results Display */}
          <div>
            <ResultsDisplay results={results} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
