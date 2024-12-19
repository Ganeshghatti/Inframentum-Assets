import { propositionText } from "@/constants";

// REACT ICONS
import { IoMdCheckmark } from "react-icons/io";

export default function OurValuePropositionText() {
  return (
    <div className="space-y-8 px-5 lg:mb-[120px]">
      <div>
        <h1 className="font-semibold max-md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  max-xl:text-center uppercase leading-loose">
          Our <span className="text-secondaryColor">Value</span> Proposition
        </h1>
      </div>
      <div>
        <h1 className="lg:text-[18px] text-base">
          <span className="text-secondaryColor font-semibold lg:text-[18px] text-base">
            Inframentum<sup className="text-xs">TM</sup> offers
          </span>{" "}
          a unique platform for clean energy asset life cycle management,
          empowering businesses to invest in, manage, and trade renewable energy
          assets efficiently.
        </h1>
      </div>
      <ul className="space-y-6 md:px-5 lg:text-[18px]">
        {propositionText?.map((each, index) => (
          <li className="flex items-start gap-2 " key={index}>
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
