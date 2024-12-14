export default function Our_Mission_Container() {
  return (
    <div className="grid grid-cols-2 max-md:space-y-4 space-y-12">
      {/* -------------------------------------------------------------------- */}
      <div className="col-span-2  max-md:flex-col flex items-center justify-center gap-4 px-5 py-4 space-y-6">
        <div className="w-[50%] flex items-center justify-center max-md:text-4xl text-5xl font-semibold">
          <h1 className="flex items-center gap-2">
            <span>Our</span>
            <span className="text-secondaryColor">Mission</span>
          </h1>
        </div>
        <div className="md:w-[80%] w-full">
          <p className="max-md:text-justify lg:text-[18px]">
            To empower the transition to sustainable energy by delivering
            innovative, data-driven asset life cycle management solutions. We
            are committed to optimizing the performance, reliability, and
            longevity of renewable energy assets, enabling our clients to
            achieve their environmental and financial goals while contributing
            to a cleaner, greener future for all
          </p>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="col-span-2 max-md:flex-col flex items-center justify-center gap-4 px-5 py-4 space-y-6">
        <div className="md:w-[80%] w-full max-md:order-2 max-md:pb-5 lg:text-[18px]">
          <p className="max-md:text-justify">
            To empower the transition to sustainable energy by delivering
            innovative, data-driven asset life cycle management solutions. We
            are committed to optimizing the performance, reliability, and
            longevity of renewable energy assets, enabling our clients to
            achieve their environmental and financial goals while contributing
            to a cleaner, greener future for all
          </p>
        </div>
        <div className="w-[50%] flex items-center justify-center max-md:text-4xl text-5xl font-semibold max-md:order-1 max-md:pb-5">
          <h1 className="flex items-center gap-2">
            <span>Our</span>
            <span className="text-secondaryColor">Vision</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
