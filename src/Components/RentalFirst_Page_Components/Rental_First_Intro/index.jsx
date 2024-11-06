// REACT ICONS
import { BsArrowRight } from "react-icons/bs";

export default function Rental_First_Intro() {
  return (
    <div className="space-y-5 md:space-y-10 px-5">
      <div className="space-y-3">
        <h1 className="md:text-5xl text-3xl font-bold">I-RENTAL FIRST</h1>
        <p className="text-sm md:text-lg font-medium bg-secondaryColor px-5 max-md:py-2 rounded-full text-bgShade">
          Flexible Rental Solutions for Sustainable Green Assets
        </p>
      </div>
      <ul className="md:text-base text-sm  list-disc space-y-3">
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
