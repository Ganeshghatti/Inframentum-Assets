import { Button } from "@/Components/ui/button";
import p_logo_1 from "../../../../assets/images/p_logo_1.png";
import { Link } from "react-router-dom";

// REACT ICON
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurPartner_1() {
  return (
    <div className="bg-[#cef5fc] text-black rounded-3xl px-1 md:px-10 py-5 md:py-10 flex max-md:flex-col flex-row items-center justify-between">
      <div className="space-y-10  md:w-[70%] px-4">
        <div>
          <h1 className="text-3xl font-semibold">SYNE</h1>
        </div>
        <div>
          <p className="max-md:text-sm lg:text-[18px]">
            SYNE is an enterprise SaaS platform enabling a structured approach
            to science-based, data-driven emissions measurement using the GHG
            Protocol and Climate Taxonomy. Powered by artificial intelligence,
            SYNE optimization, comprehensive ESG assessments through SMART
            Framework, and benchmarking with the SYNE Index.
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2 group bg-secondaryColor_hover hover:bg-secondaryColor/50 transition-all duration-300 ease-linear rounded-full px-5 py-2">
            <a
              href="https://www.syne.com/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Learn More</span>
              <span>
                <FaArrowRightLong
                  size={20}
                  className="group-hover:translate-x-1 transition-all duration-300 ease-linear"
                />
              </span>
            </a>
          </Button>
        </div>
      </div>
      <div className="md:w-[30%] max-md:order-1">
        <img
          src={p_logo_1}
          alt="p_logo_1"
          className="max-md:w-[150px] max-md:h-[150px] md:w-[250px] md:h-[250px] object-contain 2xl:ml-[100px]"
        />
      </div>
    </div>
  );
}
