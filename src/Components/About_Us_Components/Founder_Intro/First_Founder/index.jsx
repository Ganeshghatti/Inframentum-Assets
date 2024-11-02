import Founder_Image from "../../../../assets/images/team-img_1.png";
import Star_Icon from "../../../../assets/images/star.png";
import circle from "../../../../assets/images/circle.png";

export default function First_Founder() {
  return (
    <div className="grid grid-cols-4 gap-2  w-full md:px-2 md:py-2">
      <div className="col-span-3 max-md:col-span-4  h-auto max-md:order-2 max-md:mt-20">
        <ul className="space-y-4 text-3xl max-lg:text-2xl font-semibold">
          Banking and Financial Services & Strategy Consulting Professional with
          38 years experience covering.
          <div className="space-y-2 text-base max-lg:text-sm font-normal pt-4 max-lg:ml-0 ml-8">
            <li>Lending business across segments (CE, CV, WC, Infra, MFI)</li>
            <li>Leasing of Plant & Machinery</li>
            <li>Fixed Income Securities and Merchant Banking</li>
            <li>Treasury and Financial Control including Corporate Finance</li>
            <li>Strategy Consulting since last 12 years</li>
          </div>
        </ul>

        {/* -----------------Other Assignments----------------- */}
        <ul className="space-y-4 text-3xl max-lg:text-2xl font-semibold mt-14">
          Other Assignments
          <div className="space-y-4 text-sm font-normal pt-4 max-lg:ml-0 ml-8">
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Director in Consulting Firm providing services for SMEs,
                Startups & NBFCs
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Director in Fintech Company based in Bangalore
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Strategic Advisor for a NBFC focusing on Supplier and Channel
                Financing solutions [Sept 2019 onwards]
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={Star_Icon} alt="Star" />
              </span>
              <span className="w-[90%]">
                Strategic Advisor for a Company based in Ooty providing
                strategic advisory for SMEs in collaboration with lead Pvt Bank
                and Big-4 Consulting Company
              </span>
            </li>
          </div>
        </ul>
        {/* -----------------Other Assignments----------------- */}
        <ul className="space-y-8 my-4 text-3xl max-lg:text-2xl font-semibold mt-14 relative">
          Past Assignments
          <div className="space-y-4 text-sm font-normal pt-4 max-lg:ml-0 ml-8 mt-2">
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Business Head Kotak Mahindra Bank (Infra Fin, CE, WC for
                Logistics & Infra) [2001-2010]
              </span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">Director & CFO of NBFC-MFI</span>
            </li>
            <li className="flex items-start w-full gap-2">
              <span className="w-[5%]">
                <img src={circle} alt="Circle" />
              </span>
              <span className="w-[90%]">
                Alumni of IIM Bangalore with Executive MBA and Post Graduate
                Diploma in Financial Management and Post Graduate in Commerce
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
            Ramakrishnan Venkateswaran
          </span>
          <span className="max-lg:text-xs text-sm font-normal">
            Founder and CEO
          </span>
        </div>
      </div>
    </div>
  );
}
