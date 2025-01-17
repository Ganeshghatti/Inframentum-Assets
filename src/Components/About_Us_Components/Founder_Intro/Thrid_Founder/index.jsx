import Founder_Image from "../../../../assets/images/team-img_2.png";
import Star_Icon from "../../../../assets/images/star.png";
import circle from "../../../../assets/images/circle.png";

export default function Third_Founder() {
  return (
    <div className="grid grid-cols-4 gap-2  w-full md:px-2 md:py-2">
      <div className="col-span-3 max-md:col-span-4  h-auto max-md:order-2 max-md:mt-20">
        <h1 className="space-y-4 max-md:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold lg:text-[18px]">
          Entrepreneur with 33 Yrs. Of Experience in Renewable Energy Projects
          across Wind Power, Solar Power and Hydro Electricity:
        </h1>

        {/* -----------------Other Assignments----------------- */}
        <ul className="space-y-4 text-3xl max-lg:text-2xl font-semibold mt-14">
          Other Roles
          <div className="space-y-4 text-sm font-normal pt-4 max-lg:ml-0 ml-8 lg:text-[18px]">
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Past Experience includes Senior positions in GE Energy, Suzlon
                Energy etc., apart from Managing Own Companies in the Power
                sector
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Key expertise includes Handling Project From concept to
                commissioning large scale land procurement & Liaison
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Overseeing Asset Management and Operations
              </span>
            </li>
          </div>
        </ul>
        {/* -----------------Other Assignments----------------- */}
        <ul className="space-y-8 my-4 text-3xl max-lg:text-2xl font-semibold mt-14 relative">
          Past Experience
          <div className="space-y-4 text-sm font-normal pt-4 max-lg:ml-0 ml-8 mt-2 lg:text-[18px]">
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Founder Director in Wind Power Technologies Pvt Ltd-Wind Power
                Assets Management
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Founder Director in JHP Wind Power Pvt Ltd-Wind Power Assets
                Management
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Operations Head in FA Infra & Renewable Pvt Ltd-Solar and Wind
                Power Assets Management
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-md:col-span-4  md:h-[30%] lg:h-[40%] xl:h-[50%] max-md:order-1 mx-auto">
        <img
          src={Founder_Image}
          alt="Founder"
          className="w-[100%] h-[100%] object-contain"
        />
        <div className="flex flex-col items-center justify-center text-center gap-4 mt-2">
          <span className="max-lg:text-sm text-2xl font-semibold">
            Tirumalai Velu
          </span>
          <span className="max-lg:text-xs text-sm font-medium">
            (Co-Founder and Director)
          </span>
          <span className="w-[90%]">BTech in Electrical Engineering</span>
        </div>
      </div>
    </div>
  );
}
