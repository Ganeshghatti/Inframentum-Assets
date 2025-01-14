// Import Partners Images from Constants
import { partnersImages } from "@/constants";
import fainfra from "../../assets/images/fainfra.png";
import { Link } from "react-router-dom";

export default function Partners_Images() {
  return (
    <div className="bg-bgShade border border-secondaryColor rounded-xl lg:py-12">
      <div className="flex flex-row gap-6 items-center justify-between overflow-auto p-5 ">
        {partnersImages?.map((eachImage, index) => (
          <Link key={index} to={eachImage?.link} target="_parent">
            <img
              src={eachImage?.src}
              alt={eachImage?.alt}
              className="img_partner rounded-3xl cursor-pointer hover:scale-105 transition duration-300 "
            />
          </Link>
        ))}
        {/* <img src={fainfra} className="w-[100px] h-[auto]" alt="" /> */}
      </div>
    </div>
  );
}
