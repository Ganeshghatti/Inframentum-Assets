import { Button } from "@/Components/ui/button";
// import p_logo_1 from "../../../../assets/images/partners-1.png";
import infra from "../../../../assets/images/fainfra.png";

// REACT ICON
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurPartner_2() {
  return (
    <div className="bg-[#fde8d0] text-black rounded-3xl px-1 md:px-10 py-5 md:py-10 flex max-md:flex-col flex-row items-center justify-between">
      <div className="md:w-[30%] max-md:order-1">
        <img
          src={infra}
          alt="p_logo_1"
          className="max-md:w-[150px] max-md:h-[150px] md:w-[250px] md:h-[250px] object-contain 2xl:mr-48"
        />
      </div>
      <div className="space-y-10  md:w-[70%] px-4">
        <div>
          <h1 className="text-3xl font-semibold">F.A. Infra & Renewable</h1>
        </div>
        <div>
          <p className="max-md:text-sm lg:text-[18px]">
            F.A. Infra & Renewable, a renewable energy Engineering, Procurement
            and Construction Enterprise based in Bangalore. The group is headed
            by Mr. C T. Velu, one of the key stakeholders and Director of
            Inframentum<sup>TM</sup> Assets Private Limited. The group has
            investments in Renewable Energy Assets such as Solar Power Plants,
            Wind Farms etc., The Company is a valuable partner of Inframentum
            <sup>TM</sup>Assets and plays an important role in not only
            providing valuable advise to the clients of Inframentum<sup>TM</sup>{" "}
            but also provides subject matter expertise
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
    </div>
  );
}
