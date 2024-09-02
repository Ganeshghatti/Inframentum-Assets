import Our_Value_Proposition_img from "../../../assets/images/Our-Value-Proposition-img.png";

export default function OurValuePropositionImage() {
  return (
    <div className="max-xl:container mx-auto max-w-2xl space-y-10">
      <div>
        <h1 className="font-semibold lg:text-[56px] md:text-5xl max-md:text-4xl  max-xl:text-center uppercase leading-loose">
          Our Value Proposition
        </h1>
      </div>
      <div className="">
        <img
          src={Our_Value_Proposition_img}
          alt="Our Value Proposition"
          className="w-full h-4/6"
        />
      </div>
    </div>
  );
}
