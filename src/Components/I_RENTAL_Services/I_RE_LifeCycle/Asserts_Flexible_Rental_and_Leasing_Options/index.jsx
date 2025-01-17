import provider from "@/assets/images/First/provide_4.png";

export default function Asserts_Flexible_Rental_and_Leasing_Options() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#cef5fc] rounded-3xl px-6 py-8 text-black">
      <div className="col-span-1 md:col-span-2 flex flex-col justify-center ">
        <h2 className="text-4xl font-semibold">
          Flexible Rental and Leasing Options
        </h2>
        <div className="font-normal text-base space-y-4 mt-6">
          <li className="break-words list-none">
            <span className="text-secondaryColor font-semibold text-lg">
              Short-Term and Long-Term Rentals :{" "}
            </span>
            <span className="font-normal text-base">
              Offer flexible rental terms that allow customers to rent equipment
              for short-term or long-term projects, reducing the need for
              capital expenditure and promoting sustainable usage.
            </span>
          </li>
          <br />
          <li className="break-words list-none">
            <span className="text-secondaryColor font-semibold text-lg">
              Lease-to-Own Programs :{" "}
            </span>
            <span className="font-normal text-base">
              Provide lease-to-own options for customers looking to invest in
              sustainable equipment over time.
            </span>
          </li>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center mb-4 md:mb-0">
        <img
          src={provider}
          alt="Image"
          className="lg:w-[33pc] lg:h-[350px] rounded-[25px]"
        />
      </div>
    </div>
  );
}
