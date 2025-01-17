// REACT ICONS
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; // {{ edit_1 }}

export default function ReFinIntro() {
  const navigate = useNavigate(); // {{ edit_2 }}

  return (
    <div className="space-y-5 md:space-y-10 max-md:order-2">
      <div className="space-y-3">
        <h1 className="max-md:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          I-RE-Fin
        </h1>
        <p className="max-md:text-sm md:text-lg font-medium lg:text-[18px] bg-secondaryColor px-6 max-md:px-4 max-md:py-4 rounded-full text-bgShade ">
          Empowering Renewable Energy transition with Tailored Financial
          Solutions
        </p>
      </div>
      <ul className="md:text-base text-sm list-disc space-y-3 lg:ml-2">
        <div className="pl-3 space-y-3 lg:text-[18px]">
          <li>
            Inframentum<sup className="text-[10px] font-semibold">TM</sup>{" "}
            offers diverse financial services for industry growth{" "}
            <span>&amp; </span>
            development.
          </li>
          <li>
            It supports project developers, equipment manufacturers, utility
            companies alike.
          </li>
          <li>
            Investors also benefit from Inframentum
            <sup className="text-[10px] font-semibold">TM</sup>
            <span>&apos;</span>s services, fostering progress.
          </li>
        </div>
      </ul>
      <div>
        <button
          className="flex items-center gap-2 bg-secondaryColor text-white px-5 py-3 rounded-full group hover:shadow-xl text-sm md:text-base"
          onClick={() => navigate("/I_RE_FIN_Services")} // {{ edit_1 }}
        >
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
