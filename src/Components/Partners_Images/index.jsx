// Import Partners Images from Constants
import { partnersImages } from "@/constants";
import { Link } from "react-router-dom";

export default function Partners_Images() {
  return (
    <div className="bg-background_Color_4 border border-border_Color_1 rounded-xl lg:py-12">
      <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-around p-5">
        {partnersImages?.map((eachImage, index) => (
          <Link key={index} to={eachImage?.link} target="_blank">
            <img
              src={eachImage?.src}
              alt={eachImage?.alt}
              className=" img_partner rounded-3xl  cursor-pointer hover:scale-105 transition duration-300 p-5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
