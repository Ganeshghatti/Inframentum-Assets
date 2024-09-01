// REACT ICONS

import { BsArrowRight } from "react-icons/bs";

export default function AboutInframentum() {
  return (
    <div className="px-10 space-y-8 max-md:order-2">
      <div className="space-y-8">
        <h1 className="text-3xl font-semibold">
          About <span className="uppercase text-4xl">INFRAMENTUM</span>
        </h1>
        <p className="text-secondaryColor font-semibold text-lg">
          Empowering Businesses Through Flexible Ownership and Rental Solutions
          for Clean Energy Assets
        </p>
        <p className="text-slate-600">
          <span className="text-slate-950">Inframentum™</span> is a Company
          focused on Asset Life Cycle Management for Renewable Energy, Water and
          sustainable Infrastructure assets.
        </p>
      </div>
      <ul className="list-disc text-sm space-y-2">
        <span className="font-semibold">
          Experienced founders with a track record of over 100 + years covering
        </span>
        <li>Infrastructure Finance</li>
        <li>Construction Equipment and Logistics Finance</li>
        <li>
          Equipment Leasing and Rental including trading in refurbished
          equipments
        </li>
        <li>Renewable Energy Industry value chain</li>
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
