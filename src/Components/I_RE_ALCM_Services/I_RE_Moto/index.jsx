import moto_1 from "@/assets/images/moto_1.png";
import moto_2 from "@/assets/images/nature.jpg";

import { FaArrowRightLong } from "react-icons/fa6";

export default function I_Re_Moto() {
  return (
    <div className="w-[95%] mx-auto flex items-center justify-center flex-wrap max-lg:hidden">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <div className="max-md:col-span-2 w-[350px] h-[250px] bg-motoBg flex items-center justify-center rounded-3xl">
          <span className="text-6xl font-semibold">We</span>
        </div>
        <div
          className=" w-[350px] h-[250px] rounded-3xl relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${moto_1})`,
            objectPosition: "center",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        >
          <span className="text-6xl size-min text-white z-40">Protect</span>
          <div className="w-[350px] h-[250px] bg-black/20 absolute top-0 left-0 rounded-3xl"></div>
        </div>
        <div className=" w-[350px] h-[250px] bg-secondaryColor rounded-3xl  flex items-center justify-center">
          <FaArrowRightLong size={150} className="text-white" />
        </div>
        <div
          className=" w-[350px] h-[250px] rounded-3xl relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${moto_2})`,
            objectPosition: "center",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
        >
          <span className="text-6xl size-min text-white z-40">Nature</span>
          <div className="w-[350px] h-[250px] bg-black/50 absolute top-0 left-0 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}
