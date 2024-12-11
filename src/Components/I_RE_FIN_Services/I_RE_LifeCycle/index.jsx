import Assets_Management_and_Structured_Finance from "./Assets_Management_and_Structured_Finance";
import Capital_Raising_for_RE_Sector from "./Capital_Raising_for_RE_Sector";
import Corporate_Finance_Services from "./Corporate_Finance_Services";
import Exit_Strategies from "./Exit_Strategies";
import Financial_Advisory from "./Financial_Advisory";
import Green_Bonds_and_Sustainability_Linked_Financing from "./Green_Bonds_and_Sustainability_Linked_Financing";
import Investor_Relations_and_Market_Communication from "./Investor_Relations_and_Market_Communication";
import Market_Entry_and_Expansion_Strategies from "./Market_Entry_and_Expansion_Strategies";
import Mergers_and_Acquisitions from "./Mergers_and_Acquisitions";
import Private_Placements_and_Venture_Capital from "./Private_Placements_and_Venture_Capital";
import Project_Financing from "./Project_Financing";
import RE_Providers from "./RE_Providers";
import Sustainable_Investment_Advisory from "./Sustainable_Investment_Advisory";
import Target_Customer from "./Target_Customers";
import Value_Proposition from "./Value_Proposition";

export default function I_RE_LifeCycle() {
  return (
    <>
      <div className="w-[95%] mx-auto space-y-10">
        <div className="bg-secondaryColor rounded-2xl p-4">
          <h1 className=" text-center max-md:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-bgShade">
            Financial services for RE Sector
          </h1>
        </div>
        <div className="space-y-14">
          <RE_Providers />
          <Capital_Raising_for_RE_Sector />
          <Mergers_and_Acquisitions />
          <Project_Financing />
          <Financial_Advisory />
          <Market_Entry_and_Expansion_Strategies />
          <Assets_Management_and_Structured_Finance />
          <Green_Bonds_and_Sustainability_Linked_Financing />
          <Private_Placements_and_Venture_Capital />
          <Corporate_Finance_Services />
          <Investor_Relations_and_Market_Communication />
          <Sustainable_Investment_Advisory />
          <Exit_Strategies />
        </div>
      </div>
    </>
  );
}
