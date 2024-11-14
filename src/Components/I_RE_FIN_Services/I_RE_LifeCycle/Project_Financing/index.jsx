import provider from "@/assets/images/provide_1.png";

export default function Project_Financing() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Project Financing
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Project Management Support :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Arrange project financing for renewable energy projects, where
                the repayment is primarily based on the project
                <span>&apos;</span>s cash flows rather than the sponsors balance
                sheets.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Construction Financing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Offer financing solutions for the construction phase of
                renewable energy projects, including bridge loans and
                construction loans.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Securitization of Cash Flows :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Structure securitization deals where future cash flows from
                renewable energy projects, such as power purchase agreements
                (PPAs), are bundled and sold to investors as securities.
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div className="col-span-1 max-lg:col-span-3 max-lg:order-1 w-full flex items-center justify-center">
        <img src={provider} alt="Image" className="w-full" />
      </div>
    </div>
  );
}
