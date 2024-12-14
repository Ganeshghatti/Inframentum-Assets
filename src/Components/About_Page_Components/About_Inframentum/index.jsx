// REACT ICONS

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AboutInframentum() {
  return (
    <div className="lg:px-5 space-y-8 max-xl:order-2 lg:max-w-2xl">
      <div className="space-y-8">
        <div className="lg:text-[40px] text-3xl  font-semibold max-xl:hidden">
          <span>About </span>
          <span>
            INFRAMENTUM<sup>&#8482;</sup>
          </span>
        </div>
        <p className="text-secondaryColor font-semibold md:text-lg text-base lg:text-[18px]">
          Empowering Businesses Through Flexible Ownership and Rental Solutions
          for Clean Energy Assets
        </p>
        <p className="text-sm md:text-base lg:text-[18px]">
          <span className="text-slate-950 ">
            Inframentum<sup className="text-[10px] font-semibold">TM</sup>{" "}
          </span>
          is a Company focused on Asset Life Cycle Management for Renewable
          Energy, Water and sustainable Infrastructure assets.
        </p>
      </div>
      <ul className="list-disc text-sm space-y-3 lg:text-[18px]">
        <span className="font-semibold text-sm lg:text-[18px]">
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
      <Link
        to="/about-us"
        className="w-fit flex items-center gap-2 bg-secondaryColor hover:bg-secondaryColor_hover text-white px-5 py-3  rounded-full group hover:shadow-xl max-md:text-sm"
      >
        <span>Learn More</span>
        <span>
          <BsArrowRight
            size={22}
            className="group-hover:translate-x-2 transition duration-300"
          />
        </span>
      </Link>
    </div>
  );
}
