// import Cost_Effective from "./Cost_Effective";
import Platform_Providers from "./Platform_Providers";
// import Solution from "./Solution";
import Asserts_After_Buy_Services from "./Asserts_After_Buy_Services";
import Asserts_Sustainable_Supply_Chain from "./Asserts_Sustainable_Supply_Chain";
import Asserts_Flexible_Rental_and_Leasing_Options from "./Asserts_Flexible_Rental_and_Leasing_Options";
import Asserts_Green_Certification_Support from "./Asserts_Green_Certification_Support";
import Asserts_Sustainability_Reporting_and_Compliance from "./Asserts_Sustainability_Reporting_and_Compliance";

export default function I_RE_LifeCycle() {
  return (
    <div className="w-[95%] mx-auto space-y-10">
      <div className="bg-secondaryColor rounded-2xl p-4">
        <h1 className=" text-center max-md:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-bgShade">
          Equipment Lifecycle Management
        </h1>
      </div>
      <div className="space-y-14">
        <Platform_Providers />
        <Asserts_After_Buy_Services />
        <Asserts_Sustainable_Supply_Chain />
        <Asserts_Flexible_Rental_and_Leasing_Options />
        <Asserts_Green_Certification_Support />
        <Asserts_Sustainability_Reporting_and_Compliance />
        {/*
        <Asserts_Operations />
        <Asserts_Performance />
        <Cost_Effective />
        */}
      </div>
      <div>{/* <Solution /> */}</div>
    </div>
  );
}
