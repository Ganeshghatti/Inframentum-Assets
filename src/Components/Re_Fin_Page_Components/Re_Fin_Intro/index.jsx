// REACT ICONS
import { BsArrowRight } from "react-icons/bs";

export default function ReFinIntro() {
  return (
    <div className="space-y-10 px-5 max-md:order-2">
      <div className="space-y-3">
        <h1 className="md:text-5xl text-4xl  font-bold">RE-Fin</h1>
        <p className="text-lg font-medium">
          Renewable Energy Sector Financial Services
        </p>
      </div>
      <ul className="text-base  list-disc space-y-3">
        <div className="pl-3 space-y-3">
          <li>
            Inframentum<sup className="text-[10px] font-semibold">TM</sup>{" "}
            offers diverse financial services for industry growth & development.
          </li>
          <li>
            It supports project developers, equipment manufacturers, utility
            companies alike.
          </li>
          <li>
            Investors also benefit from Inframentum
            <sup className="text-[10px] font-semibold">TM</sup>
            {"'"}s services, fostering progress.
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
