import cost from "@/assets/images/cost.png";
import cost_2 from "@/assets/images/cost_2.png";
import cost_3 from "@/assets/images/cost_3.png";
import { Button } from "@/Components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Cost_Effective() {
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="max-lg:col-span-8 col-span-4 relative rounded-3xl">
        <img
          src={cost}
          alt="Cost Image"
          className="w-full h-[80%] object-cover relative rounded-3xl"
        />
        <div className="absolute max-md:top-7 md:top-[40%] lg:top-20 xl:top-[45%] left-0 z-50 p-6 space-y-7 ">
          <h1 className="max-md:text-xl md:text-4xl lg:text-xl xl:text-4xl font-semibold text-white w-[60%]">
            Renewable Energy and Asset Management
          </h1>
          <p className="text-sm xl:text-base text-white w-[90%]">
            Manages the entire lifecycle, from planning and design to
            decommissioning and recycling, ensuring optimal performance and
            sustainability.
          </p>
        </div>
        <div className="bg-black/40 h-[80%] w-full absolute top-0 left-0 z-30 rounded-3xl"></div>
        <div className="absolute top-5 right-5 w-[50px] h-[50px] bg-secondaryColor rounded-full border border-bgShade flex items-center justify-center z-50 font-semibold text-bgShade text-3xl max-md:text-base">
          1
        </div>
      </div>
      <div className="max-lg:col-span-4 col-span-2 relative rounded-3xl max-md:-mt-16 md:-mt-28 lg:mt-0">
        <img
          src={cost_2}
          alt="Cost Image"
          className="w-full h-[80%] object-cover relative rounded-3xl"
        />
        <div className="absolute top-[70%] left-[30%] max-md:top-[60%] max-md:left-[10%] z-50">
          <Button className="bg-secondaryColor hover:bg-secondaryColor_hover group flex items-center justify-center gap-4 px-6 py-4 rounded-3xl text-xl transition-all ease-linear duration-300">
            <span className="max-md:text-sm">View</span>
            <span>
              <FaArrowRightLong
                size={20}
                className="group-hover:translate-x-2 "
              />
            </span>
          </Button>
        </div>
        <div className="bg-black/30 h-[80%] w-full absolute top-0 left-0 z-30 rounded-3xl"></div>
        <div className="absolute top-5 right-5 w-[50px] h-[50px] bg-secondaryColor rounded-full border border-bgShade flex items-center justify-center z-50 font-semibold text-bgShade text-3xl max-md:text-base">
          2
        </div>
      </div>
      <div className="max-lg:col-span-4 col-span-2 relative rounded-3xl max-md:-mt-16 md:-mt-28 lg:mt-0">
        <img
          src={cost_3}
          alt="Cost Image"
          className="w-full h-[80%] object-cover relative rounded-3xl"
        />
        <div className="absolute top-[70%] left-[30%] max-md:top-[60%] max-md:left-[10%] z-50">
          <Button className="bg-secondaryColor hover:bg-secondaryColor_hover group flex items-center justify-center gap-4 px-6 py-4 rounded-3xl text-xl transition-all ease-linear duration-300">
            <span className="max-md:text-sm">View</span>
            <span>
              <FaArrowRightLong
                size={20}
                className="group-hover:translate-x-2 "
              />
            </span>
          </Button>
        </div>
        <div className="bg-black/30 h-[80%] w-full absolute top-0 left-0 z-30 rounded-3xl"></div>
        <div className="absolute top-5 right-5 w-[50px] h-[50px] bg-secondaryColor rounded-full border border-bgShade flex items-center justify-center z-50 font-semibold text-bgShade text-3xl max-md:text-base">
          3
        </div>
      </div>
    </div>
  );
}
