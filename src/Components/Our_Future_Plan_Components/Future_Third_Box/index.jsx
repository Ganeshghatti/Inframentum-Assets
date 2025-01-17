import model_3 from "@/assets/images/model_3.jpeg";

export default function Future_Third_Box() {
  return (
    <div
      className="flex flex-col gap-4 space-y-4 px-6 py-4 text-black rounded-3xl relative"
      style={{
        // backgroundImage: `url(${model_3})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-[#f0c696] opacity-50 rounded-3xl pointer-events-none"
        style={{
          zIndex: 1,
        }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-2xl font-bold ">
          Green Bonds and Sustainability Linked Financing
        </h1>
      </div>
      <div className="relative z-10">
        <p>
          <span className="lg:text-[18px]">Green Bond Issuance :</span>{" "}
          <span className="font-light text-sm lg:text-[18px]">
            Advise on and facilitate the issuance of green bonds, where the
            proceeds are used exclusively for financing environmentally
            sustainable projects, such as renewable energy.
          </span>
        </p>
      </div>
      <div className="relative z-10">
        <p>
          <span className="lg:text-[18px]">Sustainability-Linked Loans :</span>{" "}
          <span className="font-light   text-sm lg:text-[18px]">
            Arrange sustainability-linked loans, where the terms (e.g., interest
            rates) are linked to the borrower’s performance against predefined
            sustainability targets.
          </span>
        </p>
      </div>
      <div className="relative z-10">
        <p>
          <span className="lg:text-[18px]">Climate Bonds :</span>{" "}
          <span className="font-light  text-sm lg:text-[18px]">
            Support the issuance of climate bonds aimed at financing projects
            that contribute to climate change mitigation and adaptation.
          </span>
        </p>
      </div>
    </div>
  );
}
