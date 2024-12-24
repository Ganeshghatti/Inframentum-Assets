import Our_Value_Proposition_img from "../../../assets/images/Our-Value-Proposition-img.png";

export default function OurValuePropositionImage() {
  return (
    <div className="max-w-4xl mx-auto space-y-0 md:pt-[100px] lg:mb-[230px]">
      <div>
        <img
          src={Our_Value_Proposition_img}
          alt="Our Value Proposition"
          className="w-full max-md:p-5 h-auto md:w-[400px] lg:h-[420px] md:h-[450px]  lg:scale-150 mx-auto "
        />
      </div>
    </div>
  );
}
