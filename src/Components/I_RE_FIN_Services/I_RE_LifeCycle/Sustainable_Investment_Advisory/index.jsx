import provider from "@/assets/images/provide_1.png";

export default function Sustainable_Investment_Advisory() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Sustainable Investment Advisory
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Impact Investing :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Advise on and structure impact investments in renewable energy,
                where the focus is on generating positive environmental and
                social outcomes alongside financial returns.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                ESG Advisory :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide environmental, social, and governance (ESG) advisory
                services to help renewable energy companies align their
                operations and strategies with ESG best practices, attracting
                responsible investment.
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
