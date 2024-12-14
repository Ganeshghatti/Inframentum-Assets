// REACT ICONS

import { BsArrowRight } from "react-icons/bs";

export default function RE_ALCM_Intro() {
  return (
    <div className="space-y-5 md:space-y-10 max-md:order-2">
      <div className="space-y-3">
        <h1 className="max-md:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          I-RE-ALCM
        </h1>
        <p className="text-[13px] md:text-sm  py-2 font-medium bg-secondaryColor lg:text-[18px] px-5 max-md:py-2 rounded-full text-bgShade">
          Comprehensive Lifecycle Management for Renewable Energy Assets
        </p>
      </div>
      <ul className="md:text-base text-sm  list-disc space-y-3">
        <div className="pl-3 space-y-3 lg:text-[18px]">
          <li>
            Renewable Energy Asset Life Cycle Management Services addressing.
          </li>
          <li>Management of renewable energy assets—such as solar panels.</li>
          <li>
            Their entire life cycle, from planning & design to decommissioning &
            recycling.
          </li>
        </div>
      </ul>
      <div>
        <button className="flex items-center gap-2 bg-secondaryColor text-white px-5 py-3 rounded-full group hover:shadow-xl text-sm md:text-base">
          <span>Learn More</span>
          <span>
            <BsArrowRight
              size={22}
              className="group-hover:translate-x-2 transition duration-300"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
