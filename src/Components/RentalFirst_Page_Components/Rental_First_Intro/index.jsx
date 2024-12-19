// REACT ICONS
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Rental_First_Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-5 md:space-y-10 ">
      <div className="space-y-3">
        <h1 className="max-md:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          I-RENTAL FIRST
        </h1>
        <p className="text-[13px] lg:text-[18px] md:text-lg font-medium bg-secondaryColor px-5 max-md:py-2 rounded-full text-bgShade">
          Flexible Rental Solutions for Sustainable Green Assets
        </p>
      </div>
      <ul className="md:text-base text-sm lg:text-[18px] ml-2 list-disc space-y-3">
        <div className="pl-3 space-y-3">
          <li>
            Invest in energy-efficient, low-emission equipment for carbon
            footprints.
          </li>
          <li>
            Operate battery-operated handling & electric construction equipment
            efficiently.
          </li>
          <li>
            Increase efficiency, productivity, financial viability with
            eco-friendly equipment.
          </li>
        </div>
      </ul>
      <div>
        <Link to="/I_RENTAL_Services">
          <button className="flex items-center gap-2 bg-secondaryColor text-white px-5 py-3 rounded-full group hover:shadow-xl text-sm md:text-base">
            <span>Learn More</span>
            <span>
              <BsArrowRight
                size={22}
                className="group-hover:translate-x-2 transition duration-300"
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
