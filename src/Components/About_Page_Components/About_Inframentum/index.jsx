// REACT ICONS

import { BsArrowRight } from "react-icons/bs";

export default function AboutInframentum() {
  return (
    <div className="lg:px-5 space-y-8 max-xl:order-2 lg:max-w-2xl">
      <div className="space-y-8">
        <div className="lg:text-[56px] text-3xl  font-semibold max-xl:hidden">
          <span>About </span>
          <span>INFRAMENTUM</span>
        </div>
        <p className="text-secondaryColor font-semibold text-lg">
          Empowering Businesses Through Flexible Ownership and Rental Solutions
          for Clean Energy Assets
        </p>
        <p className="">
          <span className="text-slate-950">
            Inframentum<sup className="text-[10px] font-semibold">TM</sup>
          </span>
          {"  "}
          is a Company focused on Asset Life Cycle Management for Renewable
          Energy, Water and sustainable Infrastructure assets.
        </p>
      </div>
      <ul className="list-disc text-sm space-y-2 ">
        <span className="font-semibold text-sm">
          Experienced founders with a track record of over 100 + years covering
        </span>
        <div className="pl-4 space-y-3">
          <li>Infrastructure Finance</li>
          <li>Construction Equipment and Logistics Finance</li>
          <li>
            Equipment Leasing and Rental including trading in refurbished
            equipments
          </li>
          <li>Renewable Energy Industry value chain</li>
        </div>
      </ul>
      <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full group hover:shadow-xl">
        <span>Learn More</span>
        <span>
          <BsArrowRight
            size={22}
            className="group-hover:translate-x-2 transition duration-300"
          />
        </span>
      </button>
    </div>
  );
}
