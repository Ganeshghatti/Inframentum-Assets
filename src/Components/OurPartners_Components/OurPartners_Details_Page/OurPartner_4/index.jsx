import { Button } from "@/Components/ui/button";
import p_logo_1 from "../../../../assets/images/partners-2.png";

// REACT ICON
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurPartner_4() {
  return (
    <div className="bg-[#fde8d0] text-black rounded-3xl px-1 md:px-10 py-5 md:py-10 flex max-md:flex-col flex-row items-center justify-between">
      <div className="md:w-[30%] max-md:order-1">
        <img
          src={p_logo_1}
          alt="p_logo_1"
          className="max-md:w-[150px] max-md:h-[150px] md:w-[250px] md:h-[250px] object-contain 2xl:mr-48"
        />
      </div>
      <div className="space-y-6  md:w-[70%] px-4">
        <div>
          <h1 className="text-3xl font-semibold">BillionTech</h1>
        </div>
        <div>
          <p className="max-md:text-sm">
            BillionTech offers a platform for corporates to digitize
            transactions, manage trade interactions, and optimize cash
            management, with embedded payment, collection, and credit solutions
            across the supply chain. Partnering with Inframentum<sup>TM</sup>,
            it provides tools for dealer/vendor management, cash management,
            credit solutions, and sales visibility, integrating seamlessly with
            banks and financial institutions.
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2 group bg-secondaryColor_hover hover:bg-secondaryColor/50 transition-all duration-300 ease-linear rounded-full px-5 py-2">
            <a
              href="https://www.billiontech.in/"
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
    </div>
  );
}
