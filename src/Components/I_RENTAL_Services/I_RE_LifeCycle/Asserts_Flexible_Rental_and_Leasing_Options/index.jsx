import provider from "@/assets/images/provide_1.png";

export default function Asserts_Flexible_Rental_and_Leasing_Options() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-darkBg rounded-3xl px-6 py-8 text-bgShade">
      <div className="col-span-2 max-lg:col-span-3 max-lg:order-2 flex items-center ">
        <ul className="max-md:text-xl text-4xl font-semibold">
          Flexible Rental and Leasing Options
          <div className="font-normal text-base space-y-8 mt-6 max-md:text-sm">
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Short-Term and Long-Term Rentals :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Offer flexible rental terms that allow customers to rent
                equipment for short-term or long-term projects, reducing the
                need for capital expenditure and promoting sustainable usage.
              </span>
            </li>
            <li>
              <span className="text-secondaryColor font-semibold text-lg max-md:text-sm">
                Lease-to-Own Programs :{" "}
              </span>
              <span className="font-normal text-base max-md:text-sm">
                Provide lease-to-own options for customers looking to invest in
                sustainable equipment over time.
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
