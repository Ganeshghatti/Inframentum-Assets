// REACT ICONS

import { BsArrowRight } from "react-icons/bs";

export default function RE_ALCM_Intro() {
  return (
    <div className="space-y-8  max-md:order-2">
      <div className="space-y-3">
        <h1 className="md:text-5xl text-4xl font-bold">RE-ALCM</h1>
        <p className="text-lg font-medium">
          Assets Life Cycle Management Solutions
        </p>
      </div>
      <ul className="text-base  list-disc space-y-3">
        <div className="pl-3 space-y-3">
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
        <button className="flex items-center gap-2 bg-secondaryColor text-white px-5 py-3 rounded-full group hover:shadow-xl">
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
