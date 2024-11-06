import model_1 from "@/assets/images/model-1.jpeg";

export default function Future_Second_Box() {
  return (
    <div
      className="flex flex-col gap-4 space-y-4 px-6 py-4 bg-secondaryColor text-white rounded-3xl h-full w-full relative"
      style={{
        backgroundImage: `url(${model_1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50 rounded-3xl pointer-events-none"
        style={{
          zIndex: 1,
        }}
      ></div>
      <div className="relative z-10">
        <h1
          className="text-2xl font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          Blockchain for Asset Management
        </h1>
      </div>

      <div className="relative z-10">
        <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          <span className="">Blockchain Integration :</span>{" "}
          <span className="font-extralight text-sm">
            Use blockchain technology to enhance transparency and security in
            renewable energy asset management, particularly in areas like energy
            trading, contract management, and supply chain traceability.
          </span>
        </p>
      </div>
    </div>
  );
}
