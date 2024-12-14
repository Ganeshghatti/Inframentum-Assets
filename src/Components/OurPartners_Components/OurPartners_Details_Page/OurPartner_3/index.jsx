import { Button } from "@/Components/ui/button";
import p_logo_1 from "../../../../assets/images/partners-1.png";

// REACT ICON
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurPartner_3() {
  return (
    <div className="bg-[#cef5fc] text-black rounded-3xl px-1 md:px-10 py-5 md:py-10 flex max-md:flex-col flex-row items-center justify-between">
      <div className="space-y-10  md:w-[70%] px-4">
        <div>
          <h1 className="text-3xl font-semibold">GladMinds</h1>
        </div>
        <div>
          <p className="max-md:text-sm lg:text-[18px]">
            GladMinds Solutions Pvt Ltd is a A fast-rising 5-year SaaS company
            dominating the aftermarket space by empowering leading brands to
            achieve operational supremacy and customer loyalty through our
            industry-leading integrated platform. Inframentum<sup>TM</sup>{" "}
            Assets and GladMinds have entered into a MOU to support each other
            <span>&apos;</span>s customers in their respective services. For the
            clients of Inframentum<sup>TM</sup>, GladMinds is the partner
            platform through which the I-RentalFirst clients are proposed to be
            served to address all of their requirements in relation to Equipment
            Rental solutions and IoT supported asset management solutions
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2 group bg-secondaryColor_hover hover:bg-secondaryColor/50 transition-all duration-300 ease-linear rounded-full px-5 py-2">
            <span>Learn More</span>
            <span>
              <FaArrowRightLong
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300 ease-linear"
              />
            </span>
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
