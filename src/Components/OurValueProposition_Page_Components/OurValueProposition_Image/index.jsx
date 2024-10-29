import Our_Value_Proposition_img from "../../../assets/images/Our-Value-Proposition-img.png";

export default function OurValuePropositionImage() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div>
        <h1 className="font-semibold lg:text-[56px] md:text-5xl max-md:text-3xl  max-xl:text-center uppercase leading-loose">
          Our <span className="text-secondaryColor">Value</span> Proposition
        </h1>
      </div>
      <div className="">
        <img
          src={Our_Value_Proposition_img}
          alt="Our Value Proposition"
          className="w-full  max-md:p-5 h-4/6 mx-auto"
        />
      </div>
    </div>
  );
}
