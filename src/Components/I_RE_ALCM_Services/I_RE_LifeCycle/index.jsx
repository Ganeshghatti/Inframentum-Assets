import Asserts_Construction from "./Asserts_Contruction";
import Asserts_Operations from "./Asserts_Operations";
import Asserts_Performance from "./Asserts_Performance";
import Asserts_Planning from "./Asserts_Planning";
import Asserts_Procurement from "./Asserts_Procruremt";
import Cost_Effective from "./Cost_Effective";
import Platform_Providers from "./Platform_Providers";
import Solution from "./Solution";

export default function I_RE_LifeCycle() {
  return (
    <div className="w-[95%] mx-auto space-y-10">
      <div className="bg-secondaryColor rounded-2xl p-4">
        <h1 className=" text-center max-md:text-2xl max-lg:text-3xl lg:text-6xl font-semibold text-bgShade">
          Asset Life Cycle Management Solutions
        </h1>
      </div>
      <div className="space-y-14">
        <Platform_Providers />
        <Asserts_Planning />
        <Asserts_Procurement />
        <Asserts_Construction />
        <Asserts_Operations />
        <Asserts_Performance />
        <Asserts_Operations />
        <Asserts_Performance />
        <Cost_Effective />
      </div>
      <div>
        <Solution />
      </div>
    </div>
  );
}
