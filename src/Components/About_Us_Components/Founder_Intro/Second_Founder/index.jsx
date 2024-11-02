import Founder_Image from "../../../../assets/images/team-img_3.png";
import circle from "../../../../assets/images/circle.png";

export default function Second_Founder() {
  return (
    <div className="grid grid-cols-4 gap-2  w-full md:px-2 md:py-2">
      <div className="col-span-1 max-md:col-span-4  md:h-[30%] lg:h-[40%] xl:h-[50%] max-md:order-1 mx-auto">
        <img
          src={Founder_Image}
          alt="Founder"
          className="w-[100%] h-[100%] object-contain"
        />
        <div className="flex flex-col items-center justify-center text-center gap-4 mt-2">
          <span className="max-lg:text-sm text-2xl font-semibold">
            Ananth lyer
          </span>
          <span className="max-lg:text-xs text-sm font-normal">
            Co-Founder and Director
          </span>
        </div>
      </div>
      <div className="col-span-3 max-md:col-span-4  h-auto max-md:order-2 max-md:mt-20">
        <h1 className="space-y-4 text-3xl max-lg:text-2xl font-semibold">
          Entrepreneur since the last 26 years, spread across geographies both
          in India and abroad and across products and services predominantly in
          the Construction Equipment, Earthmoving & Mining segments.
        </h1>

        {/* -----------------Other Assignments----------------- */}
        <ul className="space-y-8 my-4 text-3xl max-lg:text-2xl font-semibold mt-14 relative">
          Other Assignments
          <div className="space-y-4 text-sm font-normal pt-4 max-lg:ml-0 ml-8 mt-2">
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Founder Director in India Machine Mart (Trading in CE &
                Equipment Rental business)
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Total India Revenue exceeds INR 35 Cr with Equipment Rental
                portfolio of more than 50 equipments
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Co-founder & Director in a 100% Foreign Subsidiary based in
                Africa and involved in Equipment Rentals in the Mining sector
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Total Overseas Revenue USD 6.15 Mn (5-year CAGR 38%) with
                Equipment Rental contribution USD 2.75 Mn
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                The 3 entities (including a partnership firm) own Construction &
                Mining Equipments of about 100 in number serving clientele
                across segments including large Corporate clients like L&T, Tata
                Projects, JSW etc.,
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">BE in Chemical Engineering</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
