// REACT ICONS
import { BsArrowRight } from "react-icons/bs";

export default function Rental_First_Intro() {
  return (
    <div className="space-y-10 px-5">
      <div className="space-y-3">
        <h1 className="md:text-5xl text-4xl  font-bold">RENTAL FIRST</h1>
        <p className="text-lg font-medium">Equipment Rental Solutions</p>
      </div>
      <ul className="text-base  list-disc space-y-3">
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
