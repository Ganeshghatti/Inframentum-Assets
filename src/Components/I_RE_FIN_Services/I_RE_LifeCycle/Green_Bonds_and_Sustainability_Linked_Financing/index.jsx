import provider from "@/assets/images/provide_1.png";

export default function Green_Bonds_and_Sustainability_Linked_Financing() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Green Bonds and Sustainability-Linked Financing
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Green Bond Issuance :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Advise on and facilitate the issuance of green bonds, where the
                proceeds are used exclusively for financing environmentally
                sustainable projects, such as renewable energy.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Sustainability-Linked Loans :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Arrange sustainability-linked loans, where the terms (e.g.,
                interest rates) are linked to the borrower<span>&apos;</span>s
                performance against predefined sustainability targets.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Climate Bonds :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Support the issuance of climate bonds aimed at financing
                projects that contribute to climate change mitigation and
                adaptation.
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
