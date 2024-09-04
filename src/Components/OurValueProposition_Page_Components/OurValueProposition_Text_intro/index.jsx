import { propositionText } from "@/constants";

// REACT ICONS
import { IoMdCheckmark } from "react-icons/io";

export default function OurValuePropositionText() {
  return (
    <div className="space-y-8 px-5 lg:mb-5">
      <div>
        <h1 className="lg:text-2xl text-base">
          <span className="text-secondaryColor font-semibold lg:text-2xl text-base">
            Inframentum<sup className="text-xs">TM</sup> offers
          </span>{" "}
          a unique platform for clean energy asset life cycle management,
          empowering businesses to invest in, manage, and trade renewable energy
          assets efficiently.
        </h1>
      </div>
      <ul className="space-y-6 md:px-5">
        {propositionText?.map((each, index) => (
          <li className="flex items-start gap-2" key={index}>
            <span>
              <IoMdCheckmark
                className="bg-secondaryColor text-white rounded-full p-1"
                size={24}
              />
            </span>
            <span className="lg:text-lg text-sm">{each?.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
