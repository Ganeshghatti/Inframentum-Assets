import model from "@/assets/images/model.jpeg";

export default function Future_First_Box() {
  return (
    <div
      className="relative flex flex-col gap-4 space-y-4 px-6 py-4 text-white rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${model})`,
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

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold">Digital Twin Models</h1>
      </div>
      <div className="relative z-10">
        <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          <span>Decommissioning Planning :</span>{" "}
          <span className="font-extralight text-sm">
            Develop detailed plans for the safe and cost-effective
            decommissioning of renewable energy assets, including the recycling
            or disposal of materials.
          </span>
        </p>
      </div>
      <div className="relative z-10">
        <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
          <span>Asset Recycling Solutions :</span>{" "}
          <span className="font-extralight text-sm">
            Utilize specialized solutions for the recycling of renewable energy
            components, such as solar panels and wind turbine blades, to
            minimize environmental impact.
          </span>
        </p>
      </div>
    </div>
  );
}
